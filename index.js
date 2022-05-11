const type = {
    sofa: {
      src: "http://placehold.jp/3d4070/ffffff/982x278.png?text=Sofa",
      aspectRatio: (2591 / 2349)
    },
    chair: {
      // src: "http://placehold.jp/46bbd2/ffffff/500x500.png?text=CHAIR",
      src: "https://res.cloudinary.com/dcgdzm4ai/image/upload/v1652286558/rhr/crop/2/ThaddeusFabricChairPerennialsTexturedLinenWeaveWhiteandBrass_prod18910106_E913209072_TQ_dpzj69.png",
      aspectRatio: (2591 / 2349)
    },
    sidetable: {
      // src: "http://placehold.jp/46bbd2/ffffff/560x718.png?text=SIDE%20%0ATABLE%0A",
      src: "https://res.cloudinary.com/dcgdzm4ai/image/upload/v1652209615/rhr/crop/ThaddeusGlassRoundSideTable_GlassForgedBrass_prod14920046_E510818999_F_RS_outddh.png",
      aspectRatio: (1525/1937),
      
    },
    coffee: {
      // src: "http://placehold.jp/46bbd2/ffffff/560x718.png?text=SIDE%20%0ATABLE%0A",
      src: "https://res.cloudinary.com/dcgdzm4ai/image/upload/v1652286541/rhr/crop/2/ThaddeusForgedBrassGlass36RoundCoffeeTable_prod16540251_E910819295_F_krovtz.png",
      aspectRatio: (3000/1055)
    },
    bed: {
      // src: "http://placehold.jp/46bbd2/ffffff/560x718.png?text=SIDE%20%0ATABLE%0A",
      src: "https://res.cloudinary.com/dcgdzm4ai/image/upload/v1652209641/rhr/crop/Thaddeus_Bed_with_Footboard_Leather_BerkshirePewter_ForgedBrass_prod18830011_E713177252_F_Frank_n6rrqs.png",
      aspectRatio: (3130/ 2181)
      
    },
    bench: {
      // src: "http://placehold.jp/46bbd2/ffffff/560x718.png?text=SIDE%20%0ATABLE%0A",
      src: "https://res.cloudinary.com/dcgdzm4ai/image/upload/v1652209637/rhr/crop/ThaddeusBrassXBaseFabricBench_prod20560288_E714823634_F_ulgedh.png",
      aspectRatio: (4000/ 1364)
    },
    chan: {
      // src: "http://placehold.jp/46bbd2/ffffff/560x718.png?text=SIDE%20%0ATABLE%0A",
      src: "https://res.cloudinary.com/dcgdzm4ai/image/upload/v1652286548/rhr/crop/2/ThaddeusLinearChandelier72in_ForgedBrass_prod24120086_E716810184_F_V1_ieljfk.png",
      aspectRatio: (1974/ 3000),
      offset: 0
    }
  };

  Array.from(document.querySelectorAll("img")).forEach(ele =>{
      ele.setAttribute("src", type[new URLSearchParams(location.search).get("t")].src)
  })