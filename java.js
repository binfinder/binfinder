const panticon = L.icon({
    iconUrl: "bilder/Pantstation.webp",
    iconSize: [80, 80],
});



const atervining = L.icon({
    iconUrl: "bilder/Återvinning.webp",
    iconSize: [60, 60],
});


const soppicon = L.icon({
    iconUrl: "bilder/Sopptunna.webp",
    iconSize: [50, 50],
});







const allPantstations = L.layerGroup();
const allAtervinning = L.layerGroup();
const allBins = L.layerGroup();



// Här kommer alla pantstationer
const pantstation1 = L.marker([58.770468, 17.020561], { icon: panticon }).addTo(allPantstations);
const pantstation2 = L.marker([58.770619, 17.021002], { icon: panticon }).addTo(allPantstations);
const pantstation3 = L.marker([58.756886, 17.038026], { icon: panticon }).addTo(allPantstations);
const pantstation4 = L.marker([58.755015, 17.016065], { icon: panticon }).addTo(allPantstations);
const pantstation5 = L.marker([58.771792, 17.016746], { icon: panticon }).addTo(allPantstations);
const pantstation6 = L.marker([58.753843, 17.052422], { icon: panticon }).addTo(allPantstations);
const pantstation7 = L.marker([58.743685, 17.006527], { icon: panticon }).addTo(allPantstations);
const pantstation8 = L.marker([58.769779, 17.024456], { icon: panticon }).addTo(allPantstations);
const pantstation9 = L.marker([58.746010, 16.993945], { icon: panticon }).addTo(allPantstations);
const pantstation10 = L.marker([58.752314, 17.003456], { icon: panticon }).addTo(allPantstations);
const pantstation11 = L.marker([58.745620, 17.007101], { icon: panticon }).addTo(allPantstations);
const pantstation12 = L.marker([58.747376, 16.973018], { icon: panticon }).addTo(allPantstations);



// // Här kommer alla återvinningsstationer

const atervinning1 = L.marker([58.754880, 17.004897], { icon: atervining }).addTo(allAtervinning);
const atervinning2 = L.marker([58.756633, 17.013264], { icon: atervining }).addTo(allAtervinning);
const atervinning3 = L.marker([58.755679, 17.015618], { icon: atervining }).addTo(allAtervinning);
const atervinning4 = L.marker([58.758513, 17.000517], { icon: atervining }).addTo(allAtervinning);
const atervinning5 = L.marker([58.752865, 16.990587], { icon: atervining }).addTo(allAtervinning);
const atervinning6 = L.marker([58.751523, 17.028042], { icon: atervining }).addTo(allAtervinning);
const atervinning7 = L.marker([58.769607, 16.980847], { icon: atervining }).addTo(allAtervinning);
const atervinning8 = L.marker([58.769934, 16.986537], { icon: atervining }).addTo(allAtervinning);
const atervinning9 = L.marker([58.770915, 17.023478], { icon: atervining }).addTo(allAtervinning);
const atervinning10 = L.marker([58.765695, 17.008394], { icon: atervining }).addTo(allAtervinning);
const atervinning11 = L.marker([58.761462, 17.021434], { icon: atervining }).addTo(allAtervinning);
const atervinning12 = L.marker([58.757002, 17.039260], { icon: atervining }).addTo(allAtervinning);
const atervinning13 = L.marker([58.753708, 17.053047], { icon: atervining }).addTo(allAtervinning);
const atervinning14 = L.marker([58.748195, 17.036970], { icon: atervining }).addTo(allAtervinning);
const atervinning15 = L.marker([58.744424, 17.021671], { icon: atervining }).addTo(allAtervinning);
const atervinning16 = L.marker([58.742550, 17.006638], { icon: atervining }).addTo(allAtervinning);
const atervinning17 = L.marker([58.729607, 17.012929], { icon: atervining }).addTo(allAtervinning);
const atervinning18 = L.marker([58.727895, 17.022586], { icon: atervining }).addTo(allAtervinning);
const atervinning19 = L.marker([58.711804, 16.994222], { icon: atervining }).addTo(allAtervinning);















// Här kommer alla soptunnor
const bin1 = L.marker([58.750911, 17.004711], { icon: soppicon }).addTo(allBins);
const bin2 = L.marker([58.751776, 17.009344], { icon: soppicon }).addTo(allBins);
const bin3 = L.marker([58.751849, 17.009688], { icon: soppicon }).addTo(allBins);
const bin4 = L.marker([58.751848, 17.010139], { icon: soppicon }).addTo(allBins);
const bin5 = L.marker([58.751947, 17.009523], { icon: soppicon }).addTo(allBins);
const bin6 = L.marker([58.752145, 17.009597], { icon: soppicon }).addTo(allBins);
const bin7 = L.marker([58.752762, 17.008820], { icon: soppicon }).addTo(allBins);
const bin8 = L.marker([58.752851, 17.009873], { icon: soppicon }).addTo(allBins);
const bin9 = L.marker([58.752644, 17.009993], { icon: soppicon }).addTo(allBins);
const bin10 = L.marker([58.752319, 17.010235], { icon: soppicon }).addTo(allBins);
const bin11 = L.marker([58.752530, 17.011578], { icon: soppicon }).addTo(allBins);
const bin12 = L.marker([58.752615, 17.011180], { icon: soppicon }).addTo(allBins);
const bin13 = L.marker([58.752892, 17.012124], { icon: soppicon }).addTo(allBins);
const bin14 = L.marker([58.752949, 17.010674], { icon: soppicon }).addTo(allBins);
const bin15 = L.marker([58.753087, 17.011045], { icon: soppicon }).addTo(allBins);
const bin16 = L.marker([58.753284, 17.010751], { icon: soppicon }).addTo(allBins);
const bin17 = L.marker([58.753428, 17.011447], { icon: soppicon }).addTo(allBins);
const bin18 = L.marker([58.752347, 17.013797], { icon: soppicon }).addTo(allBins);
const bin19 = L.marker([58.751823, 17.013007], { icon: soppicon }).addTo(allBins);
const bin20 = L.marker([58.751851, 17.012789], { icon: soppicon }).addTo(allBins);
const bin21 = L.marker([58.751639, 17.010772], { icon: soppicon }).addTo(allBins);
const bin22 = L.marker([58.751617, 17.010619], { icon: soppicon }).addTo(allBins);
const bin23 = L.marker([58.751337, 17.009842], { icon: soppicon }).addTo(allBins);
const bin24 = L.marker([58.751220, 17.009625], { icon: soppicon }).addTo(allBins);
const bin25 = L.marker([58.748245, 17.008787], { icon: soppicon }).addTo(allBins);
const bin26 = L.marker([58.749186, 17.008178], { icon: soppicon }).addTo(allBins);
const bin27 = L.marker([58.751353, 17.006478], { icon: soppicon }).addTo(allBins);
const bin28 = L.marker([58.751400, 17.007167], { icon: soppicon }).addTo(allBins);
const bin29 = L.marker([58.751648, 17.007436], { icon: soppicon }).addTo(allBins);
const bin30 = L.marker([58.752121, 17.009047], { icon: soppicon }).addTo(allBins);
const bin31 = L.marker([58.751983, 17.008791], { icon: soppicon }).addTo(allBins);
const bin32 = L.marker([58.749981, 17.010419], { icon: soppicon }).addTo(allBins);
const bin33 = L.marker([58.749384, 17.009945], { icon: soppicon }).addTo(allBins);
const bin34 = L.marker([58.747969, 17.009254], { icon: soppicon }).addTo(allBins);
const bin35 = L.marker([58.747783, 17.009804], { icon: soppicon }).addTo(allBins);
const bin36 = L.marker([58.748216, 17.007501], { icon: soppicon }).addTo(allBins);
const bin37 = L.marker([58.748252, 17.007837], { icon: soppicon }).addTo(allBins);
const bin38 = L.marker([58.748407, 17.008028], { icon: soppicon }).addTo(allBins);
const bin39 = L.marker([58.747887, 17.004436], { icon: soppicon }).addTo(allBins);
const bin40 = L.marker([58.747873, 17.005053], { icon: soppicon }).addTo(allBins);
const bin41 = L.marker([58.747925, 17.004480], { icon: soppicon }).addTo(allBins);
const bin42 = L.marker([58.747753, 17.007015], { icon: soppicon }).addTo(allBins);
const bin43 = L.marker([58.748711, 17.006141], { icon: soppicon }).addTo(allBins);
const bin44 = L.marker([58.749972, 17.005268], { icon: soppicon }).addTo(allBins);
const bin45 = L.marker([58.749655, 17.001237], { icon: soppicon }).addTo(allBins);
const bin46 = L.marker([58.749511, 17.001243], { icon: soppicon }).addTo(allBins);
const bin47 = L.marker([58.749997, 17.001881], { icon: soppicon }).addTo(allBins);
const bin48 = L.marker([58.749776, 17.001816], { icon: soppicon }).addTo(allBins);
const bin49 = L.marker([58.749754, 17.001466], { icon: soppicon }).addTo(allBins);
const bin50 = L.marker([58.749603, 17.001644], { icon: soppicon }).addTo(allBins);
const bin51 = L.marker([58.749420, 17.001666], { icon: soppicon }).addTo(allBins);
const bin52 = L.marker([58.749241, 17.001677], { icon: soppicon }).addTo(allBins);
const bin53 = L.marker([58.749041, 17.001705], { icon: soppicon }).addTo(allBins);
const bin54 = L.marker([58.748927, 17.001738], { icon: soppicon }).addTo(allBins);
const bin55 = L.marker([58.748963, 17.001856], { icon: soppicon }).addTo(allBins);
const bin56 = L.marker([58.748747, 17.001833], { icon: soppicon }).addTo(allBins);
const bin57 = L.marker([58.748666, 17.001684], { icon: soppicon }).addTo(allBins);
const bin58 = L.marker([58.748211, 17.001770], { icon: soppicon }).addTo(allBins);
const bin59 = L.marker([58.748370, 17.001655], { icon: soppicon }).addTo(allBins);
const bin60 = L.marker([58.751119, 17.001179], { icon: soppicon }).addTo(allBins);
const bin61 = L.marker([58.750988, 17.001917], { icon: soppicon }).addTo(allBins);
const bin62 = L.marker([58.750727, 17.001743], { icon: soppicon }).addTo(allBins);
const bin63 = L.marker([58.750364, 17.002866], { icon: soppicon }).addTo(allBins);
const bin64 = L.marker([58.748349, 17.004548], { icon: soppicon }).addTo(allBins);
const bin65 = L.marker([58.747624, 17.003200], { icon: soppicon }).addTo(allBins);
const bin66 = L.marker([58.747151, 17.002150], { icon: soppicon }).addTo(allBins);


const bin70 = L.marker([58.7506374, 17.0232128], { icon: soppicon }).addTo(allBins);
const bin71 = L.marker([58.7531885, 17.0152135], { icon: soppicon }).addTo(allBins);
const bin72 = L.marker([58.7539012, 17.0170696], { icon: soppicon }).addTo(allBins);
const bin73 = L.marker([58.7553782, 17.0204847], { icon: soppicon }).addTo(allBins);   
const bin74 = L.marker([58.7552014, 17.0210496], { icon: soppicon }).addTo(allBins);
const bin75 = L.marker([58.7550925, 17.0214714], { icon: soppicon }).addTo(allBins);
const bin76 = L.marker([58.7528791, 17.0254055], { icon: soppicon }).addTo(allBins);
const bin77 = L.marker([58.7520674, 17.0242013], { icon: soppicon }).addTo(allBins);
const bin78 = L.marker([58.7519911, 17.0232534], { icon: soppicon }).addTo(allBins);
const bin79 = L.marker([58.7518822, 17.0212293], { icon: soppicon }).addTo(allBins);
const bin80 = L.marker([58.7523677, 17.0184598], { icon: soppicon }).addTo(allBins);
const bin81 = L.marker([58.7531843, 17.0216572], { icon: soppicon }).addTo(allBins); 


const bin90 = L.marker([58.753327, 17.000109], { icon: soppicon }).addTo(allBins); 
const bin91 = L.marker([58.753639, 17.000850], { icon: soppicon }).addTo(allBins); 
const bin92 = L.marker([58.752939, 17.002625], { icon: soppicon }).addTo(allBins); 
const bin93 = L.marker([58.753328, 17.003966], { icon: soppicon }).addTo(allBins); 
const bin94 = L.marker([58.756775, 17.015254], { icon: soppicon }).addTo(allBins); 
const bin95 = L.marker([58.755237, 17.012413], { icon: soppicon }).addTo(allBins); 














// Kartan :)
const osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    // attribution:
    //     '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
});




// Sätter kartan till Nyköping och visar de lager vi vill se
const map = L.map("map", {
    center: [58.75315, 17.01756],
    zoom: 14,
    layers: [osm, allPantstations, allAtervinning, allBins,],
});



const overlays = {
    Pantstationer: allPantstations,
    Återvinningsstationer: allAtervinning, 
    Soptunnor: allBins,
    
};

// Null har vi för att få kryssrutor
const layerControl = L.control.layers(null, overlays).addTo(map);