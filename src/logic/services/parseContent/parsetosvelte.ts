import { Largebuttons, Readmore, Imagedescription, A } from "@sharing/atoms";
import { Imagegroup } from "@sharing/molecules";
import { 
    Img1, 
    Img3, 
    BillGatesImg, 
    OfferBannerImg, 
    TopBannerImg,
    FBPostImg, 
    GIFImg, 
    CheckImg, 
    FamilyImg,
    Step2Img, 
    Step3Img 
} from "@data"

const images_list: any = {
    'top_banner': TopBannerImg,
    'image_celebrity_1': Img1,
    'image_celebrity_3': Img3,
    'image_bill': BillGatesImg,
    'image_post': FBPostImg,
    'image_family': FamilyImg,
    'image_gif': GIFImg,
    'image_check': CheckImg,
    'image_offer_banner': OfferBannerImg,
    'image_step_2': Step2Img,
    'image_step_3': Step3Img
}

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


