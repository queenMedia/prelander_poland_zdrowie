import { Largebuttons, Readmore, Imagedescription, Customtext, A } from "@sharing/atoms";


export const parseImage = (img: string, text: string)  => {
    return {
        component: Imagedescription, 
        props: { 
            text: text, img: 
            img 
        } 
    };
}

export const parseComponent = (component: any, props: any)  => {
    return {
        component: component, 
        props: props
    };
}