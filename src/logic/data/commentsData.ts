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
        name: "Adam Nowak",
        text: "Niedawno handlowałem z Bitcoin Code i osiągnąłem niewielki zysk w wysokości 105900 PLN. Uwielbiam to!",
        img: profile1,
        time: 1,
        likes: 13,
        timeFormat: "minutes"
    },
    {
        name: "Apoloniusz Kowalski",
        text: "Widziałam Bitcoin Code na projekcie i zapisałam się wczoraj, zarobiłam około 2450 PLN",
        img: profile2,
        time: 1,
        likes: 13,
        timeFormat: "minutes"
    },
    {
        name: "Ewa Wojcik",
        text: "Przyjaciel wypróbował go i poleca, ja też muszę spróbować.",
        img: profile3,
        time: 3,
        likes: 19,
        timeFormat: "minutes"
    },
    {
        name: "Janina Kaminski",
        text: "Jest bardzo łatwy w użyciu, wystarczy wprowadzić pieniądze, a następnie robot wykona całą pracę za Ciebie.",
        img: profile4,
        likes: 1,
        time: 5,
        timeFormat: "minutes"
    },
    {
        name: "Kacper Dabrowski",
        text: "Widziałem to w wiadomościach - dzięki za udostępnienie tego artykułu!",
        img: profile5,
        likes: 1,
        time: 13,
        timeFormat: "minutes"
    },
    {
        name: "Łukasz Zieliński",
        text: "Słyszałem tak wiele o bitcoinie i wszystkich, którzy go używają, naprawdę muszę to wypróbować!",
        img: profile6,
        likes: 1,
        time: 25,
        timeFormat: "minutes"
    },
    {
        name: "Maurycy Szymański",
        text: "W ciągu zaledwie tygodnia zarobiłem ponad 5600 zł, poważnie myślę o rzuceniu pracy i robieniu tego na pełny etat.",
        img: profile7,
        likes: 1,
        time: 49,
        timeFormat: "minutes"
    },
    {
        name: "Justyna Tarnowski",
        text: "Wczoraj kupiłem swój pierwszy bitcoin i jestem bardzo podekscytowany, aby zobaczyć, co dostanę w ciągu najbliższych kilku dni.",
        img: profile8,
        likes: 1,
        time: 58,
        timeFormat: "minutes"
    },
    {
        name: "Piotr Chomętowski",
        text: "U mnie zadziałało! Było tak, jak myślałem. To było bardzo proste i chciałem tylko dać innym znać, kiedy coś działa.",
        img: profile9,
        likes: 1,
        time: 59,
        timeFormat: "minutes"
    },
    {
        name: "Aleksandra Gwiazda",
        text: "Dzięki za informacje, właśnie zacząłem korzystać z platformy.",
        img: profile10,
        likes: 1,
        time: 1,
        timeFormat: "hours"
    },
    {
        name: "Marcin Bystroń",
        text: "Ostatnio byłam bardzo zajęta dziećmi, więc jest to idealne rozwiązanie. Zarobiłem około 40 PLN w 4 dni - to niewiele, ale to dobry początek!",
        img: profile11,
        likes: 1,
        time: 1,
        timeFormat: "hours"
    },
    {
        name: "Krzysztof Białas",
        text: "Jestem naprawdę pod wrażeniem tego, do tej pory zdeponowałem ponad 2000 NPL na moim koncie i zarobiłem ponad cztery razy więcej.",
        img: profile12,
        likes: 1,
        time: 1,
        timeFormat: "hours"
    },
    {
        name: "Katarzyna Głowacz",
        text: "Jest naprawdę łatwy w użyciu i bardzo szybki. Nie jestem osobą techniczną, ale wszystko zrozumiałem bardzo szybko. Zarobiłem około 500 zł w ciągu jednego dnia!!!",
        img: profile13,
        likes: 1,
        time: 2,
        timeFormat: "hours"
    },
    {
        name: "Artur Białas",
        text: "Właśnie się zarejestrowałem, życzę powodzenia!",
        img: profile14,
        likes: 1,
        time: 2,
        timeFormat: "hours"
    },
    {
        name: "Dariusz Mickiewicz",
        text: "Znajomy wysłał mi e-mail i powiedział, że współpracownik powiedział mu o tym. Myślę, że działa dobrze.",
        img: profile15,
        likes: 1,
        time: 2,
        timeFormat: "hours"
    },
    {
        name: "Agnieszka Wańkowicz",
        text: "Nie byłem pewien, czy powinienem się zarejestrować, ale cieszę się, że to zrobiłem. Zarobiłem około 350 NPL po zaledwie 2 godzinach na platformie. To bardzo proste i szybkie, nie może być łatwiejsze.",
        img: profile16,
        likes: 1,
        time: 2,
        timeFormat: "hours"
    },
    {
        name: "Joanna Ohanowicz",
        text: "Właśnie zdeponowałem swoją pierwszą kwotę. Nie mogę się doczekać, aby zobaczyć, co się stanie, gdy zacznie rosnąć.",
        img: profile17,
        likes: 1,
        time: 2,
        timeFormat: "hours"
    },
    {
        name: "Andrzej Kirkorowicz",
        text: "To musi być najłatwiejszy sposób na zarabianie pieniędzy za pomocą bitcoinów, nawet ja to zrobiłem bez wcześniejszego doświadczenia.",
        img: profile18,
        likes: 1,
        time: 2,
        timeFormat: "hours"
    },
    {
        name: "Monika Haugvoldstad",
        text: "Próbowałem tak wielu odmian tego, w pewnym sensie chcę spróbować, ale z drugiej strony myślę po prostu \"bah\"! Czy ktoś może mi powiedzieć, czy to naprawdę działa?",
        img: profile19,
        likes: 1,
        time: 3,
        timeFormat: "hours"
    },
    {
        name: "Robert Ajwasowski",
        text: "Wypróbowałem tę platformę jakiś czas temu i działała dla mnie bardzo dobrze.",
        img: profile20,
        likes: 1,
        time: 3,
        timeFormat: "hours"
    },
    {
        name: "Magdalena Chalembek",
        text: "Niektórzy z moich znajomych zainwestowali w bitcoiny i niesamowicie zyskali, teraz chcę do nich dołączyć.",
        img: profile21,
        likes: 1,
        time: 4,
        timeFormat: "hours"
    },
  
];

export default commentsData;
