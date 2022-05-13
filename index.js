let helpOn = false;
const type = {
  sofa: {
    src: "https://res.cloudinary.com/dcgdzm4ai/image/upload/v1652477150/rhr/crop/3/MaxwellOriginalArm_Sofa_Fabric_TwoToneLinenDove_OakBrown_prod20250031_E114406377_F_Frank_vg2nkg.png",
    aspectRatio: 2591 / 2349,
  },
  chair: {
    // src: "http://placehold.jp/46bbd2/ffffff/500x500.png?text=CHAIR",
    src: "https://res.cloudinary.com/dcgdzm4ai/image/upload/v1652286558/rhr/crop/2/ThaddeusFabricChairPerennialsTexturedLinenWeaveWhiteandBrass_prod18910106_E913209072_TQ_dpzj69.png",
    aspectRatio: 2591 / 2349,
    pb: 3,
  },
  sidetable: {
    // src: "http://placehold.jp/46bbd2/ffffff/560x718.png?text=SIDE%20%0ATABLE%0A",
    // src: "https://res.cloudinary.com/dcgdzm4ai/image/upload/v1652209615/rhr/crop/ThaddeusGlassRoundSideTable_GlassForgedBrass_prod14920046_E510818999_F_RS_outddh.png",
    src: "https://res.cloudinary.com/dcgdzm4ai/image/upload/v1652467894/rhr/crop/3/Campaign_Table_Side_Square_with_Drawer_20inW_OakWaxedBlack_Brass_prod18940193_E913158430_F_CC_io044l.png",
    aspectRatio: 1525 / 1937,
    offset: 25,
    pb: 6,
  },
  coffee: {
    // src: "http://placehold.jp/46bbd2/ffffff/560x718.png?text=SIDE%20%0ATABLE%0A",
    // src: "https://res.cloudinary.com/dcgdzm4ai/image/upload/v1652286541/rhr/crop/2/ThaddeusForgedBrassGlass36RoundCoffeeTable_prod16540251_E910819295_F_krovtz.png",
    src: "https://res.cloudinary.com/dcgdzm4ai/image/upload/v1652468062/rhr/crop/3/graydonshagreen_table_coffee_round_shagreengrey_stainlesssteelbrushednickel_prod12740173_e29951240_f_cc_mxshib.png",
    aspectRatio: 3000 / 1055,
  },
  bed: {
    // src: "http://placehold.jp/46bbd2/ffffff/560x718.png?text=SIDE%20%0ATABLE%0A",
    src: "https://res.cloudinary.com/dcgdzm4ai/image/upload/v1652209641/rhr/crop/Thaddeus_Bed_with_Footboard_Leather_BerkshirePewter_ForgedBrass_prod18830011_E713177252_F_Frank_n6rrqs.png",
    aspectRatio: 3130 / 2181,
    px: 6,
    pb: 3,
  },
  bench: {
    // src: "http://placehold.jp/46bbd2/ffffff/560x718.png?text=SIDE%20%0ATABLE%0A",
    src: "https://res.cloudinary.com/dcgdzm4ai/image/upload/v1652209637/rhr/crop/ThaddeusBrassXBaseFabricBench_prod20560288_E714823634_F_ulgedh.png",
    aspectRatio: 4000 / 1364,
    px: 3,
  },
  chan: {
    // src: "http://placehold.jp/46bbd2/ffffff/560x718.png?text=SIDE%20%0ATABLE%0A",
    // src: "https://res.cloudinary.com/dcgdzm4ai/image/upload/v1652286548/rhr/crop/2/ThaddeusLinearChandelier72in_ForgedBrass_prod24120086_E716810184_F_V1_ieljfk.png",
    src: "https://res.cloudinary.com/dcgdzm4ai/image/upload/v1652471179/rhr/crop/3/Calcite_Chandelier_Round_Tier_1_19in_LacqueredBurnishedBrass_prod20670144_E214099629_F_CC_hr1djh.png",
    aspectRatio: 1974 / 3000,
    offset: 0,
    px: 6,
    pb: 3,
  },
};

const params = new URLSearchParams(location.search);

const custom = params.get("q");
const pOffset = params.get("offset");
const g = params.get("g");
const cOffset = Number(pOffset);

function setG(g) {
  if (g) {
    const list = document.getElementById("list");
    const nG = Number(g);
    switch (nG) {
      case 3:
        list.classList.add("grid-3");
        list.classList.remove("grid-1");

        break;
      case 2:
        list.classList.remove("grid-3");
        list.classList.remove("grid-1");

        break;
      case 1:
        list.classList.add("grid-1");
        list.classList.remove("grid-3");

        break;
    }
  }
}

function setData(key) {
  const { src, offset, pb, px } = type[key] ?? {};

  Array.from(document.querySelectorAll("img")).forEach((ele) => {
    if (custom) {
      ele.setAttribute("src", `https://placehold.jp/${custom}.png`);
    } else {
      ele.setAttribute("src", src);
    }
    if (offset >= 0) {
      ele.style.height = 100 - offset + "%";
    }
    if (pOffset && cOffset >= 0) {
      ele.style.height = 100 - cOffset + "%";
    }
    if (pb) {
      ele.parentElement.style.paddingBottom = pb ? pb + "%" : "6%";
    }
    if (px) {
      ele.parentElement.style.paddingLeft = px ? px + "%" : "3%";
      ele.parentElement.style.paddingRight = px ? px + "%" : "3%";
    }
  });
}
setG(g);

setData(params.get("t") || "sidetable");

const filterNode = document.getElementById("filters");
document.addEventListener("keyup", function (e) {
  if (e.key === "h") {
    filterNode.classList.toggle("hide");
  }
});

const typeSelect = document.getElementById("type");
const columnsSelect = document.getElementById("columns");

Object.keys(type).forEach((key) => {
  const option = document.createElement("option");
  option.textContent = key;
  option.value = key;

  typeSelect.appendChild(option);

});

typeSelect.addEventListener("change", ({ target: { value } }) => {
  
  setData(value);
});
columnsSelect.addEventListener("change", ({ target: { value } }) => {
  
  setG(value);
});
