const slider = document.getElementById("swiper-wrapper");

let SliderPages = [
    ['Vintage Mid Century Modern Studiokeramik Signed Vase','German Pottery',"£120.00","Very good condition.","No chips or cracks.","https://i.etsystatic.com/30278368/r/il/09aa31/4538518809/il_794xN.4538518809_jbud.jpg","https://www.etsy.com/uk/listing/1270454534/vintage-mid-century-modern-studiokeramik"],
    ['Hand Painted Ceramic Vase','Puente del Arzobispo',"£26.00","Hand-painted ceramic vase. Totally made and painted by hand.","Look at pictures for wear marks and imperfections.","https://i.etsystatic.com/30278368/r/il/5240a5/4407285572/il_794xN.4407285572_29jr.jpg","https://www.etsy.com/uk/listing/1270454534/vintage-mid-century-modern-studiokeramik"]
];

function createElementWithClass(t,c,p,i) {
    let e = document.createElement(t);
    e.setAttribute("class",c);
    e.setAttribute("id",i)
    p.appendChild(e);
    return e;
}

function generateSP() {
    var count = 0;
    SliderPages.forEach(e => {
        count++;
        let wrapper = createElementWithClass("div","main swiper-slide",slider,String(count));
        let left_side = createElementWithClass("div","left-side",wrapper);
        let left_side_wrapper = createElementWithClass("div","main-wrapper",left_side);
        let main_header = createElementWithClass("h3","main-header",left_side_wrapper);
        let main_title = createElementWithClass("h3","main-title",left_side_wrapper);
        let main_subtitle = createElementWithClass("h3","main-subtitle",left_side_wrapper);
        let main_content = createElementWithClass("div","main-content",left_side);
        let main_content_title = createElementWithClass("div","main-content_title",main_content);
        let main_content_subtitle = createElementWithClass("div","main-content_subtitle",main_content);
        let link = createElementWithClass("a","link",main_content);
        let center = createElementWithClass("div","center",wrapper);
        let image = createElementWithClass("img","",center);

        main_header.innerText = e[0];
        main_title.innerText = e[1];
        main_subtitle.innerText = e[2];
        main_content_title.innerText = e[3];
        main_content_subtitle.innerText = e[4];
        link.innerText ="Shop Now";
        link.setAttribute("href",e[6]);
        image.setAttribute("src",e[5]);
    })
}

generateSP();