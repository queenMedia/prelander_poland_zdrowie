import profile1 from "../../assets/images/sharing/comments/1.jpg"
import profile2 from "../../assets/images/sharing/comments/2.jpg"
import profile3 from "../../assets/images/sharing/comments/3.jpg"
import profile4 from "../../assets/images/sharing/comments/4.jpg"
import profile5 from "../../assets/images/sharing/comments/5.jpg"
import profile6 from "../../assets/images/sharing/comments/6.jpg"
import profile7 from "../../assets/images/sharing/comments/7.jpg"
import profile8 from "../../assets/images/sharing/comments/8.jpg"
import profile9 from "../../assets/images/sharing/comments/9.jpg"
import profile10 from "../../assets/images/sharing/comments/10.jpg"
import profile11 from "../../assets/images/sharing/comments/11.jpg"
import profile12 from "../../assets/images/sharing/comments/12.jpg"
import profile13 from "../../assets/images/sharing/comments/13.jpg"
import profile14 from "../../assets/images/sharing/comments/14.jpg"
import profile15 from "../../assets/images/sharing/comments/15.jpg"
import profile16 from "../../assets/images/sharing/comments/16.jpg"
import profile17 from "../../assets/images/sharing/comments/17.jpg"
import profile18 from "../../assets/images/sharing/comments/18.jpg"
import profile19 from "../../assets/images/sharing/comments/19.jpg"
import profile20 from "../../assets/images/sharing/comments/20.jpg"
import profile21 from "../../assets/images/sharing/comments/21.jpg"
import profile22 from "../../assets/images/sharing/comments/22.jpg"

type commentsDataType = {
    name: string;
    text: string;
    img: string;
    time: number;
    likes: number;
    timeFormat: string;
}
const commentsData: Array<commentsDataType> = [
    {
        name: "Susanne Olaussen",
        text: "Jeg har handlet med Bitcoin Code de siste ukene, og fått en liten fortjeneste på 23,000 kr. Jeg elsker det!",
        img: profile1,
        time: 12,
        likes: 13,
        timeFormat: "minutes"
    },
    {
        name: "Anne Miljeteig",
        text: "Jeg så Bitcoin Code på prosjektet og registrerte meg i går, jeg har tjent rundt 250 kr.",
        img: profile2,
        time: 6,
        likes: 13,
        timeFormat: "minutes"
    },
    {
        name: "Christina Østerås",
        text: "En venn av meg har prøvd den og anbefaler den, jeg må teste det ut selv.",
        img: profile3,
        time: 13,
        likes: 19,
        timeFormat: "minutes"
    },
    {
        name: "Roar Erikstad",
        text: "Den er så enkel å bruke, du bare setter inn penger og så gjør roboten all jobben for deg.",
        img: profile4,
        likes: 1,
        time: 13,
        timeFormat: "minutes"
    },
    {
        name: "Anne Torsvik",
        text: "Jeg så denne på nyhetene. Takk for at du deler denne aritkkelen!",
        img: profile5,
        likes: 43,
        time: 1,
        timeFormat: "minutes"
    },
    {
        name: "Klara Bårdsen",
        text: "Jeg har hørt så mye om bitcoin og alle som brukte det, jeg må virkelig prøve dette selv!",
        img: profile6,
        likes: 3,
        time: 1,
        timeFormat: "minutes"
    },
    {
        name: "Martin Willumsen",
        text: "Jeg har tjent over 14,300 kr på bare en uke, jeg vurderer sterkt å si opp jobben og drive med dette på fulltid.",
        img: profile7,
        likes: 1,
        time: 2,
        timeFormat: "hours"
    },
    {
        name: "Per Hansen",
        text: "Jeg kjøpte min første bitcoin i går, og jeg er virkelig spent på hva jeg kan få ut av det de neste dagene.",
        img: profile8,
        likes: 12,
        time: 2,
        timeFormat: "hours"
    },
    {
        name: "May Steen",
        text: "det virket for meg! Det virket akkurat slik jeg trodde det skulle. Det var veldig enkelt, og jeg ville bare at andre skal vite når noe virker.",
        img: profile9,
        likes: 13,
        time: 12,
        timeFormat: "hours"
    },
    {
        name: "Lise Pettersen",
        text: "Takk for infoen, har nettopp startet å bruke plattformen.",
        img: profile10,
        likes: 12,
        time: 1,
        timeFormat: "hours"
    },
    {
        name: "Frida Jacobsen",
        text: "Vært så opptatt med barna i det siste, så dette passer perfekt. Jeg har tjent rundt 1,900 kr på 4 dager. Det er lite, men er en ordentlig god start!",
        img: profile11,
        likes: 13,
        time: 1,
        timeFormat: "hours"
    },
    {
        name: "Jostein Næss",
        text: "Jeg er virkelig imponert over dette, jeg har satt inn over 5,000 kr på min konto foreløpig, og har tjent mer enn fire ganger det.",
        img: profile12,
        likes: 13,
        time: 1,
        timeFormat: "hours"
    },
    {
        name: "Anne Hagen",
        text: "Virkelig enkel å bruke, og ordentlig rask. Jeg er ingen teknisk person, men dette skjønte jeg veldig raskt. Jeg har tjent rundt 1,300 kr på bare en dag!!",
        img: profile13,
        likes: 13,
        time: 1,
        timeFormat: "hours"
    },
    {
        name: "Mali Jenssen",
        text: "Nettopp registrert meg, ønsk meg lykke til folkens.",
        img: profile14,
        likes: 13,
        time: 1,
        timeFormat: "hours"
    },
    {
        name: "Trygve Aspelund",
        text: "Vennen min sendte meg en epost, og fortalte at en arbeidskollega hadde fortalt henne om denne. Jeg vil tro det virker bra",
        img: profile15,
        likes: 13,
        time: 1,
        timeFormat: "hours"
    },
    {
        name: "Anders Gjerstad",
        text: "Ikke helt sikker på om jeg skulle registrere meg, men jeg er glad jeg gjorde det. Jeg har tjent rundt 890 kr etter bare 2 timer på plattformen. Veldig enkelt og veldig raskt, kunne ikke vært enklere.",
        img: profile16,
        likes: 13,
        time: 1,
        timeFormat: "hours"
    },
    {
        name: "Jon Larsen",
        text: "Ikke helt sikker på om jeg skulle registrere meg, men jeg er glad jeg gjorde det. Jeg har tjent rundt 890 kr etter bare 2 timer på plattformen. Veldig enkelt og veldig raskt, kunne ikke vært enklere.",
        img: profile17,
        likes: 13,
        time: 1,
        timeFormat: "hours"
    },
    {
        name: "Astrid Hansen",
        text: "Jeg har nettopp satt inn det første beløpet mitt. Jeg gleder meg til å se hva som skjer når det starter.",
        img: profile18,
        likes: 13,
        time: 1,
        timeFormat: "hours"
    },
    {
        name: "Else Madsen",
        text: "Dette må være den enkleste måten å tjene på bitcoin noensinne, selv jeg klarte å gjøre uten noen som helst form for erfaring fra før.",
        img: profile19,
        likes: 13,
        time: 1,
        timeFormat: "hours"
    },
    {
        name: "Lisa Haugvoldstad",
        text: "Jeg har prøvd så mange forskjellige varianter av dette, på en måte ønsker jeg å prøve, men på den andre siden tenker jeg bare \"jaja\"!! Kan noen være så snille og fortelle meg at det faktisk virker.",
        img: profile20,
        likes: 13,
        time: 1,
        timeFormat: "hours"
    },
    {
        name: "Hans Gunderssen",
        text: "Jeg prøvde denne plattformen for en liten stund siden, og den virket veldig bra for meg",
        img: profile21,
        likes: 13,
        time: 1,
        timeFormat: "hours"
    },
    {
        name: "Svein Akselsen",
        text: "Noen av mine venner har investert i bitcoin og tjent utrolig mye på det, jeg skal bli med dem nå.",
        img: profile22,
        likes: 13,
        time: 1,
        timeFormat: "hours"
    }
];

export default commentsData;
