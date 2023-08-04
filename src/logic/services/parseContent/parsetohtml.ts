
export const parseToHtml = (data: string, bucket: any, offer: string, styles:any) =>  {

    data = parseBucketData(data, bucket, offer);

    data = parseHTMLElements(data, styles);

    data = parseComponents(data);

    data = parseImages(data)

    return data;
}

export const parseBucketData = (data: string, bucket: any, offer: string) => {

    data = data.replaceAll("{{BUCKET_TITLE}}", `${bucket.title}`);
    data = data.replaceAll("{{BUCKET_SUBTITLE}}", `<p><i>${bucket.subtitle}</i></p>`);

    data = data.replaceAll("{{IMG_1_DESCRIPTION_BUCKET}}", `${bucket.firstSection.ImgDescription}`);
    
    data = data.replaceAll("{{BUCKET_FIRST_CONTENT}}", `${bucket.firstSection.celebrityDescription}`);

    data = data.replaceAll("{{CELEBRITY}}", `${bucket.fullName}`);
    data = data.replaceAll("{{OFFER}}", `${bucket.offers[offer].name}`);

    data = data.replaceAll("{{CURRENCY}}", `${bucket.targetCurrency.symbol}`);

    return data;
}

const parseHTMLElements = (data: string, styles: any) => {

    data = data.replaceAll("{{title}}", `<h1 class='${styles.title}'>`);
    data = data.replaceAll("{{/title}}", "</h1>");

    data = data.replaceAll("{{u}}", "<u>");
    data = data.replaceAll("{{/u}}", "</u>");

    data = data.replaceAll("{{b}}", "<b>");
    data = data.replaceAll("{{/b}}", "</b>");

    data = data.replaceAll("{{subtitle}}", `<h2 class='${styles.sub_title}'>`);
    data = data.replaceAll("{{/subtitle}}", "</h2>");

    data = data.replaceAll("{{i}}", "<i>");
    data = data.replaceAll("{{/i}}", "</i>");

    data = data.replaceAll("{{p}}", "<p>");
    data = data.replaceAll("{{/p}}", "</p>");

    return data;
}

const parseComponents = (data: string) => {
    data = data.replaceAll("{{large_button}}", "<div id='large_button'></div>");

    data = data.replaceAll("{{image_celebrity_with_table}}", "<div id='image_group'></div>");

    data = data.replaceAll("{{read_more}}", "<div id='read_more'></div>");
   
    data = data.replaceAll("{{link}}", "<a id='link'>");
    data = data.replaceAll("{{/link}}", "</a>");

    return data;
}

const parseImages = (data: string) => {

    /* 
    A image  with format: 
        [[imgtype]][text_below] 
    
        is parsed to html as:

    <div id='img' imgtype="image_1_bucket text="im a a text below image"></div>
        
    */

    const imgRegex = /\[\[([^[\]]+)\]\]\[([^[\]]+)\]/g;

    data = data.replace(imgRegex, "<div id='image' imgtype='$1' text='$2'></div>");
       
    return data;
}
