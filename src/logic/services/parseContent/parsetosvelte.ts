import { Largebuttons, Readmore, Imagedescription, A } from "@sharing/atoms";
import { Imagegroup } from "@sharing/molecules";
import { bucketImagesStore } from "@stores";

let images_list: any = {}
bucketImagesStore.subscribe((images) => {
    images_list = {
        'top_banner': images.TopBannerImg,
        'image_celebrity_1': images.Img1,
        'image_celebrity_3': images.Img3,
        'image_bill': images.BillGatesImg,
        'image_post': images.FBPostImg,
        'image_family': images.FamilyImg,
        'image_gif': images.GIFImg,
        'image_check': images.CheckImg,
        'image_offer_banner': images.OfferBannerImg,
        'image_step_2': images.Step2Img,
        'image_step_3': images.Step3Img
    }
});

export const parseToSvelte = (attribs: any, hanldeReadMore: any) =>  {

    switch (attribs.id) {
        case 'link':
            return parseComponent(A, { section: 'content' });
        break;
        case 'large_button':
            return parseComponent(Largebuttons, { text: 'KLIKNIJ TUTAJ, ABY ROZPOCZĄĆ' });
        break;
        case 'image_group':
            return parseComponent(Imagegroup, { text: 'KLIKNIJ TUTAJ, ABY ROZPOCZĄĆ' });
        break;
        case 'read_more':
            return parseComponent(Readmore, { 
                text: 'KLIKNIJ, ABY PRZECZYTAĆ CAŁY ARTYKUŁ', 
                hanldeReadMore: hanldeReadMore
            });
        break;
        case 'image':
            return parseImage(images_list[attribs.imgtype], attribs.text);
        break;
        default:
            return;
        break;
    }

}
const parseImage = (img: string, text: string)  => {

    return {
        component: Imagedescription, 
        props: { 
            text: text, 
            img: img 
        } 
    };
}
const parseComponent = (component: any, props: any)  => {
    return {
        component: component, 
        props: props
    };
}


