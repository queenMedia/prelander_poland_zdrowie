<script lang="ts">
  import Customtext from "../../../sharing/atoms/Customtext/Customtext.svelte";
  import Comments from "../../molecules/Comments/Comments.svelte";
  import type { Props } from "./Content.proptypes";
  import * as styles from "./Content.styles";
  import { Whitdrawals } from "@home/atoms";
  import { Imagegroup } from "@sharing/molecules";
  import {
    Largebuttons,
    Readmore,
    Imagedescription,
    Link,
  } from "@sharing/atoms";

  export let bucket: Props["bucket"];
  export let character: Props["character"];
  export let offer: Props["offer"];
  export let redirect: Props["redirect"];
  const {
    citizenText,
    fullName,
    lastName,
    contentLnag,
    targetGeo,
    geoCapital,
    currency,
    geo,
    title,
    subtitle,
    firstSection,offers
  } = bucket;

  
 
</script>

<div class={styles.content}>
  <Link character_name={fullName} redirect={redirect} offerName={offers[offer].name} color={false} bold italic offer={false} section="content" text="<u>RAPPORTO SPECIALE:</u> l'ultimo investimento di <b>{fullName}</b> ha lasciato gli esperti a bocca aperta e spaventato le banche" content={false} className={styles.title} parser={false} />
  <em class={styles.em}>
    {subtitle}
  </em>
  <Link character_name={fullName} redirect={redirect} offerName={offers[offer].name} color={false} bold italic offer={false} section="content" text="" content={true} className="" parser={false} >
    <img src={Img_banner} alt=""  class={styles.img} />

  </Link>
  <div class={styles.imagedescription}>
    <img src={Img1} alt="" class={styles.image}/>
      <p class={styles.description("16")}>
        <b>{fullName}</b> rivela il nuovo investimento segreto che sta arricchendo centinaia di {citizenText}
      </p>
  </div>
  
  {@html firstSection.lastp}
  <p>
    "Ciò che mi ha permesso di avere successo è stato il fatto di aver approfittato rapidamente di quest'opportunità, senza alcuna esitazione. Al momento, ciò che mi fa guadagnare di più è un nuovo
    <Link character_name={fullName} redirect={redirect} offerName={offers[offer].name} color bold italic offer={false} section="content" text="programma di trading automatico di criptovalute, chiamato {offers[offer].name}." content={false} className="" parser={false} />
    Si tratta della più grande opportunità che io abbia mai visto in vita mia, e che può far guadagnare una fortuna rapidamente. Invito tutti ad approfittarne, prima che le banche la blocchino".
  </p>
  {@html firstSection.upptoLink}

  <Imagegroup offer_name={offer} character_name={fullName} currency={currency.toLowerCase()}/>
  <p>
    Lo spazio dedicato a <b>{fullName}</b> è terminato, prima che lui potesse andare a fondo, pertanto abbiamo organizzato un'intervista esclusiva con lui, per scoprire di più su quest'opportunità controversa.
  </p>
  <div class={styles.container_to_center}>
    <Largebuttons text="CLICCA PER INIZIARE SUBITO"/>
  </div>
  <Link character_name={fullName} redirect={redirect} offerName={offers[offer].name} color={false} bold italic offer={false} section="content" text="ESCLUSIVA CON <b>{fullName}</b>" content={false} className={styles.sub_title} parser={false} />
  
    <p>
    "Potreste aver sentito parlare di questa <b>nuova piattaforma per gli investimenti in criptovalute, chiamata</b> <Link character_name={fullName} redirect={redirect} offerName={offers[offer].name} color bold italic offer section="content" text="" content={false} className="" parser={false} />, che sta aiutando la gente comune in {geo}, Asia e Nord America a guadagnare enormi fortune, da un giorno all'altro. Potreste essere scettici, perchè sembra troppo bello per essere vero."
  </p>
  <p>
    <b>{fullName}</b> ha proseguito, affermando:
  </p>
  <p>
    "Provai la stessa sensazione quando un mio amico fidato me ne parlò. Tuttavia, dopo aver visto con i miei occhi quanti soldi stava guadagnando, decisi di provarlo di persona.
  </p>
  <p>
    Sono contento di averlo provato, poiché mi ha permesso di fare soldi nella maniera più semplice di tutte. <b>Sto parlando di decine di migliaia di euro al giorno</b>. Al momento, è il sistema che riesce a far guadagnare di più in assoluto. E non durerà per molto tempo ancora, in quanto sempre più persone lo stanno scoprendo. Oppure, potrebbe essere bloccato per sempre dalle banche."
  </p>
  <img src={Img3} alt="" class={styles.img}/>
  <Link character_name={fullName} redirect={redirect} offerName={offers[offer].name} color={false} bold italic offer={false} section="content" text="COS'È ESATTAMENTE {offers[offer].name} E COME FUNZIONA?" content={false} className={styles.sub_title} parser={false} />

  <p>
    <b>L'idea alla base di <Link character_name={fullName} redirect={redirect} offerName={offers[offer].name} color bold italic offer section="content" text="" content={false} className="" parser={false} /> è semplice:</b> permettere alle persone comuni di guadagnare dal boom delle criptovalute, l'investimento più redditizio del 21esimo secolo, nonostante ciò che pensa la maggior parte delle persone.
  </p>
  <p>
    Sebbene il prezzo del Bitcoin sia sceso, dal valore massimo registrato di $65,000 per Bitcoin, i trader riescono ancora a guadagnare parecchio. Perché? Perché ci sono migliaia di altre criptovalute, oltre al Bitcoin, che vengono scambiate, generando enormi guadagni ogni giorno.
  </p>
  <p>
    Alcune di queste criptovalute includono Ripple, Ethereum, Monero e Zcash e riescono ancora a garantire ritorni del 10,000% e oltre, per chiunque voglia investire in {geo}.
  </p>
  <p>
    <Link character_name={fullName} redirect={redirect} offerName={offers[offer].name} color bold italic offer section="content" text="" content={false} className="" parser={false} /> ti permette di ricavare un profitto da tutte queste criptovalute, anche in un mercato ribassista. Utilizza l'intelligenza artificiale (IA) per gestire le vendite "short" e "long" per tuo conto, in modo che tu possa guadagnare sempre, anche mentre dormi.
  </p>
  <p>
    <Link character_name={fullName} redirect={redirect} offerName={offers[offer].name} color bold italic offer section="content" text="" content={false} className="" parser={false} /> è promosso da alcune delle menti più intelligenti in assoluto nel settore tecnologico:<b> Richard Branson, Elon Musk e Bill Gates,</b> solo per citarne alcune.
  </p>
  <Imagedescription text="Bill Gates e Richard Branson parlano di {offers[offer].name} al CES 2023." offer={offer} type="billgates" />
  <p>
    Questi geni della tecnologia hanno creato aziende multi-milionarie, risolvendo problemi complessi, come pagamenti online, calcoli e trasporto. Ora, stanno affrontando il problema della disuguaglianza nella distribuzione della ricchezza, cercando di far guadagnare a tutti, ricchi o poveri, <b>abbastanza denaro per poter condurre una vita felice e appagante.</b>
  </p>
  <Link character_name={fullName} redirect={redirect} offerName={offers[offer].name} color={false} bold italic offer={false} section="content" text="IL SEGRETO REDDITIZIO PER GUADAGNARE SOLDI, CHE VIENE CELATO DALLE GRANDI BANCHE" content={false} className={styles.sub_title} parser={false} />

  <p>
    <b>{fullName}</b> ha poi affermato:
  </p>
  <p>
    "Oggigiorno l'economia è in crisi, e questa è la soluzione che la gente stava aspettando. In passato non abbiamo mai avuto 
    <Link character_name={fullName} redirect={redirect} offerName={offers[offer].name} color bold italic offer={false} section="content" text=" un'opportunità così straordinaria" content={false} className="" parser={false} /> 
    grazie alla quale la gente comune può avvantaggiarsi e <b>generare una ricchezza enorme in poco tempo.</b>
  </p>
  <p>
    Alcune persone sono riluttanti a provare questo sistema, poiché è molto diverso dagli altri. Il motivo è che le <b>banche stanno cercando di nasconderlo in tutti i modi!</b> Le grandi banche stanno creando attivamente una propaganda, nella quale si dipingono le criptovalute e <Link character_name={fullName} redirect={redirect} offerName={offers[offer].name} color bold italic offer section="content" text="" content={false} className="" parser={false} /> come una truffa. Perché? Sono preoccupate per il fatto che i loro profitti possano ridursi, dopo che i loro clienti avranno scoperto come diventare ricchi autonomamente.
  </p>
  <p>
    La verità è che le criptovalute sono una rivoluzione dei nostri tempi e chiunque non ne sta approfittando sta perdendo l'occasione! <b>Ho già ricevuto delle telefonate minacciose da parte delle grandi organizzazioni finanziarie</b>, poiché sto portando questa tecnologia all'attenzione della gente. Peggio per loro! Le persone in {geo} stanno iniziando a scoprire la verità e sarà solo una questione di tempo, prima che molti altri ne vengano a conoscenza.
  </p>
  <p>
    Sto condividendo questa storia, perché ho anche ricevuto centinaia di email di persone che mi ringraziano per aver rivelato questo segreto. La mia storia preferita è quella di un <b>ragazzo che ha regalato al fratello l'auto dei suoi sogni,</b> una Ferrari 488 Pista, usando i profitti generati da <Link character_name={fullName} redirect={redirect} offerName={offers[offer].name} color bold italic offer section="content" text="" content={false} className="" parser={false} />. Questa piattaforma sta davvero migliorando la vita di tutte le persone del mondo."
  </p>
  <Imagedescription text="Fin da bambino, mio fratello aveva sempre desiderato una Ferrari 488 Pista, per via del classico colore rosso e del motore potente. Bene, ultimamente, ho guadagnato tantissimi soldi, grazie a una nuova piattaforma di trading di criptovalute (mandatemi un messaggio per maggiori informazioni), e l'ho sorpreso, regalandogli l'AUTO DEI SUOI SOGNI! La sua reazione è stata IMPAGABILE! Ti voglio bene, fratellino!" offer={offer} type="posts"/>
  <Link character_name={fullName} redirect={redirect} offerName={offers[offer].name} color={false} bold italic offer={false} section="content" text="" content={true} className={styles.sub_title} parser={false} >
    <h2 class={styles.sub_title}><Link character_name={fullName} redirect={redirect} offerName={offers[offer].name} color bold italic offer section="content" text="" content={false} className="" parser={false} /> FUNZIONA DAVVERO? L'ABBIAMO PROVATO NOI STESSI PER SCOPRIRLO</h2>
  </Link>
  <p>
    I nostri redattori senior non ci volevano dare l'autorizzazione a pubblicare l'intervista con <b>{fullName}</b>, se prima non avessimo verificato la legittimità di <Link character_name={fullName} redirect={redirect} offerName={offers[offer].name} color bold italic offer section="content" text="" content={false} className="" parser={false} /> come strumento per guadagnare denaro stando a casa. I direttori della nostra azienda non volevano pubblicare alcuna informazione che potesse far perdere, potenzialmente, tutti i soldi ai cittadini {contentLocation}.
  </p>
  <p>
    Dunque, il nostro team editoriale ha testato <Link character_name={fullName} redirect={redirect} offerName={offers[offer].name} color bold italic offer section="content" text="" content={false} className="" parser={false} />, per assicurarsi che funzionasse esattamente come aveva descritto <b>{fullName}</b>. Uno dei nostri redattori online, <b>Francesco Pellegrini,</b> si è offerto come volontario, rischiando i suoi fondi e testando {offers[offer].name}.
  </p>
  <p>
    <b>Francesco Pellegrini</b> è un papà di 42 anni, con 2 bambini e una moglie che, l'anno scorso, ha perso il lavoro, a causa di una malattia. Ha ammesso di trovarsi in difficoltà finanziarie e che questa opportunità avrebbe potuto aiutarlo.
  </p>
  <div class={styles.imagedescription}>
    <img src={Family} alt="" class={styles.image}/>
      <p class={styles.description("16")}>
        La famiglia di <b>Francesco</b> faceva fatica ad arrivare alla fine del mese e sperava che {offers[offer].name} potesse offrire un valido aiuto finanziario; così, <b>{fullName}</b> ha deciso di testare il sistema e di pubblicarne i risultati
      </p>
  </div>

  <p>
    <b>Ecco il racconto di <b>Francesco Pellegrini</b>:</b>
  </p>
  <p>
    "All'inizio, quando ascoltai l'intervista di <b>{fullName}</b>, pensavo che stesse scherzando. Guadagnare da casa è un sogno. Decisi di provare comunque, viste le mie condizioni economiche, e anche per spirito giornalistico.
  </p>
  <p>
    Guardai un
    <Link character_name={fullName} redirect={redirect} offerName={offers[offer].name} color bold italic offer={false} section="content" text=" video introduttivo sulla piattaforma" content={false} className="" parser={false} /> , e mi iscrissi. Il video sembrava troppo ottimista sulle possibilità di guadagno, ma decisi di lasciare da parte il mio scetticismo. Entro poche ore, ricevetti una chiamata dal mio investitore personale, che rispose a tutte le domande e i dubbi che avevo, garantendomi che avrei ottenuto dei guadagni.
  </p>
  <p>
    Il mio investitore personale mi promise anche che, <b>se avessi perso un solo euro</b>, mi avrebbe rimborsato il mio deposito di {currency.symbol}300. Era davvero convinto di potermi cambiare la vita. L'assistenza clienti è stata fantastica, oltre ogni aspettativa, ed è ovvio che le banche sono preoccupate.
  </p>
  <p>
    Dopo aver guadagnato accesso alla piattaforma, depositai una somma iniziale di {currency.symbol}300, più o meno la cifra che la mia famiglia spende per cibi poco salutari ogni mese. Decisi di fare a meno di mangiare fast food per un mese. Avevamo la possibilità di vivere in maniera più sana e, soprattutto, di diventare ricchi.
  </p>
  <p>
    Il sistema {offers[offer].name} è una piattaforma di trading automatico delle criptovalute. Il software utilizza algoritmi di IA avanzati e l'apprendimento automatico per prevedere <b> esattamente </b> quando il prezzo delle criptovalute salirà o scenderà. Successivamente, acquista o vende automaticamente, per tuo conto, 24 ore su 24. La tecnologia ci ha già semplificato tanti aspetti della vita, dunque, perché non sfruttarla anche per fare un pò di soldi?"
  </p>

  <Link character_name={fullName} redirect={redirect} offerName={offers[offer].name} color={false} bold italic offer={false} section="content" text="I RISULTATI DI <b>FRANCESCO</b> CON IL SISTEMA IN TEMPO REALE" content={false} className={styles.sub_title} parser={false} />

  <p>
    "Trascorsa 1 ora dal deposito di {currency.symbol}300, il software iniziò a fare trading per conto mio. Ad essere sincero, avevo paura di perdere tutti i miei soldi, anche perché la prima operazione mi aveva provocato una perdita di {currency.symbol}25!
  </p>
  <p>
    Iniziai a sudare freddo, pensavo di essere stato raggirato. Ero pronto a chiamare il mio investitore personale e a chiedergli il rimborso dei soldi. Tuttavia, mi ricordai ciò che mi aveva detto durante la chiamata precedente:<b>  l'algoritmo funziona l'80-90% delle volte. </b> Non si può guadagnare da OGNI operazione, ma si riesce a guadagnare comunque bene e a realizzare profitti.
  </p>
  <p>
    Dunque, lasciai il software a fare il suo lavoro, monitorandolo attentamente. <b>L'operazione successiva andò a buon fine!</b> Solo {currency.symbol}19, ma era già qualcosa. Quella dopo mi fece guadagnare <b>{currency.symbol}51</b>, poi ancora altri <b>{currency.symbol}22</b>, per un totale di <b>{currency.symbol}67</b>. Il tutto in meno di 5 minuti!
  </p>
  <p>
    Presto, iniziai a guadagnare rapidamente, non riuscivo a crederci.
  </p>
  <!-- gif -->
  <div class={styles.imagedescription}>
    <img src={Gif} alt="" class={styles.image}/>
  </div>
  
  <!-- gig -->
  <p>
    Ora, so perché <b>{fullName}</b> è sempre di buon umore, e anche perché le banche non vogliono che si diffonda questo 
     
    <Link character_name={fullName} redirect={redirect} offerName={offers[offer].name} color bold italic offer={false} section="content" text="segreto." content={false} className="" parser={false} />
    Alla fine della giornata, <b>avevo guadagnato {currency.symbol}754</b>, non male per aver iniziato con {currency.symbol}300! Ero così euforico che non riuscii a dormire bene.
  </p>
  <p>
    Il giorno successivo, martedì, tornai al lavoro. Sinceramente (e non ditelo al mio capo), era difficile concentrarmi sul lavoro, sapendo che <Link character_name={fullName} redirect={redirect} offerName={offers[offer].name} color bold italic offer section="content" text="" content={false} className="" parser={false} /> mi stava facendo guadagnare.
  </p>
  <p>
    Andai in bagno qualche volta, per controllare i miei guadagni, che continuavano a crescere (con qualche piccola perdita). Alla fine della giornata, prima di mettere i miei figli a letto, avevo <b>{currency.symbol}1,349.13 nel mio conto</b>, molto di più di quanto guadagnavo in una SETTIMANA di lavoro!
  </p>
  <p>
    Al termine della settimana, avevo guadagnato <b>{currency.symbol}6,149.13</b>, prelevai esattamente {currency.symbol}4,800 e reinvestii la somma rimanente. Nel giro di 2 giorni, ricevetti il mio primo assegno nella casella postale, esattamente {currency.symbol}4,800. Non riuscivo a crederci che fosse vero!"
  </p>
  <Imagedescription text="<b>Francesco</b> ha ricevuto un assegno del valore di {currency.symbol}4,800, dopo aver usato {offers[offer].name} per due settimane" offer={offer} type="checks"/>
  <p>
    <b>La storia di <b>Francesco Pellegrini</b> prosegue,</b>
  </p>
  <p>
    "Al momento, guadagno, ogni giorno, fra i {currency.symbol}700 e i {currency.symbol}1,500, grazie a <Link character_name={fullName} redirect={redirect} offerName={offers[offer].name} color bold italic offer section="content" text="" content={false} className="" parser={false} />. Ora, il denaro viene depositato sul mio conto bancario, ogni tre giorni circa. Solo qualche clic e ricevo i fondi entro 24/48 ore. Ogni volta che il denaro arriva sul mio conto, devo darmi uno schiaffetto per capire che non sto sognando.
  </p>
  <p>
    Fortunatamente, AMO il mio lavoro qui, poiché produco delle storie giornalistiche importanti (come questa), altrimenti mi sarei già licenziato. Tuttavia, ho già prenotato una vacanza con la mia famiglia a Bali, in Indonesia, per festeggiare l'estinzione dei miei debiti e la fine dei problemi economici della mia famiglia!
  </p>
  <p>
    Ciò non sarebbe stato possibile senza la generosità del sig. <b>{fullName}</b>, che ha svelato questo segreto in diretta TV. Sono felice di aver rischiato e di aver usato <Link character_name={fullName} redirect={redirect} offerName={offers[offer].name} color bold italic offer section="content" text="" content={false} className="" parser={false} />. Mia moglie è più felice che mai e la stanza dei giocattoli dei miei figli è ben fornita...
  </p>
  <p>
    I miei colleghi si stanno mangiando le mani, per non essersi iscritti due settimane fa, come avevo fatto io. Alla fine, tutto l'ufficio si è iscritto (anche il mio capo) e mi chiamano "eroe" per aver sperimentato questo sistema."
  </p>
  <Link character_name={fullName} redirect={redirect} offerName={offers[offer].name} color={false} bold italic offer={false} section="content" text="" content={true} className={styles.sub_title} parser={false} >
    <h2 class={styles.sub_title}>COME INIZIARE A USARE <Link character_name={fullName} redirect={redirect} offerName={offers[offer].name} color bold italic offer section="content" text="" content={false} className="" parser={false} /> (POSTI LIMITATI)</h2>
  </Link>
 
  <p>
    Per iniziare, hai bisogno solo di un computer, uno smartphone o un tablet, con accesso a Internet. Non hai bisogno di particolari competenze, se non quelle di saper usare un computer ed essere in grado di navigare. Non devi avere alcuna esperienza nel settore della tecnologia o delle criptovalute, poiché il software e il tuo investitore personale ti 
    <Link character_name={fullName} redirect={redirect} offerName={offers[offer].name} color bold italic offer={false} section="content" text="garantiscono un profitto." content={false} className="" parser={false} />
   
  </p>
  <p>
    Un altro vantaggio di questo programma è che puoi iniziare quando vuoi. Puoi decidere quanto lavorare, che siano 5 ore alla settimana o anche 50. Devi semplicemente avviare il software di trading automatico quando desideri, e puoi metterlo in pausa in qualsiasi momento (anche se non vedo il motivo perchè tu lo voglia fare!).
  </p>
  <p>
    Per far risparmiare tempo ai lettori e spiegare le funzioni del sistema, <b>Francesco Pellegrini</b> ha creato una guida introduttiva.
  </p>
  <Link character_name={fullName} redirect={redirect} offerName={offers[offer].name} color={false} bold italic offer={false} section="content" text="ECCO LA MIA GUIDA PASSO PER PASSO:" content={false} className={styles.sub_title} parser={false} />
  <p>
    La prima cosa che vedrai sarà un video che ti mostrerà l'efficacia di {offers[offer].name}. La pubblicità è eccezionale e attraente, ma è stata realizzata dagli americani, che sono abituati a fare le cose in questo modo. In ogni caso, devi 
    <Link character_name={fullName} redirect={redirect} offerName={offers[offer].name} color bold italic offer={false} section="content" text="semplicemente inserire il tuo nome e indirizzo email" content={false} className="" parser={false} />
    , affianco al video, per iniziare subito.
  </p>
  <p>
    <b>(Consiglio</b>: anche se decidi di non investire il tuo denaro, ti consiglio di 
    <Link character_name={fullName} redirect={redirect} offerName={offers[offer].name} color bold italic offer={false} section="content" text="iscriverti" content={false} className="" parser={false} />
     comunque, in quanto è gratis e le registrazioni per i residenti in {geo} potrebbero chiudersi in qualsiasi momento)
  </p>
  <Imagedescription text="" offer={offer} type="banners"/>
  <p>
    Nel passaggio successivo, ti verrà chiesto di 
    <Link character_name={fullName} redirect={redirect} offerName={offers[offer].name} color bold italic offer={false} section="content" text="depositare fondi sul tuo account. " content={false} className="" parser={false} />
    
    Mentre navigavo nella pagina del deposito, il mio telefono squillò. Era un numero internazionale ed ero riluttante a rispondere, ma poi capii chi era.
  </p>
  <div class={styles.imagedescription}>
    <img src={Step2} alt="" class={styles.image}/>
  </div>
  <!-- steps2 -->
  <p>
    Ovviamente, era il mio account manager personale, che mi offrì un servizio eccellente, guidandomi nell'intero processo di deposito. Sono accettate tutte le carte di credito principali, come Visa, MasterCard e American Express. Proseguii e depositai l'importo minimo di {currency.symbol}300.
  </p>
  <!-- steps 3 -->
  <div class={styles.imagedescription}>
    <img src={Step3} alt="" class={styles.image}/>
  </div>
  <p>
    Dopo aver effettuato il deposito, navigai nella sezione "Auto-Trader" del software, impostai l'importo consigliato con cui fare trading, {currency.symbol}50, e diedi la mia autorizzazione. Il software iniziò a effettuare operazioni rapide; all'inizio, ero un po' preoccupato, ma poi decisi di lasciarlo fare il suo lavoro.
  </p>
  <p>
    "Tutti vogliono diventare ricchi, ma nessuno sa come riuscirci. Bene, esiste un'opportunità unica nella vita per guadagnare una fortuna, che vi permette di vivere come desiderate. NON sarà disponibile per sempre, approfittatene". - <b>{fullName}</b>
  </p>
  <Link character_name={fullName} redirect={redirect} offerName={offers[offer].name} color={false} bold italic offer={false} section="content" text="AGGIORNARE" content={false} className={styles.sub_title} parser={false} />

  <p>
    Abbiamo appena ricevuto la notizia che,quasi tutti i posti disponibili per i residenti in {geo} sono presi. {offers[offer].name} può accettare solo un numero limitato di utenti totali, al fine di mantenere alti i profitti per ciascun utente. Al momento, sono ancora disponibili (37) posti. Allora, 
    <Link character_name={fullName} redirect={redirect} offerName={offers[offer].name} color bold italic offer={false} section="content" text="non perdere tempo e iscriviti subito, per assicurarti un posto. " content={false} className="" parser={false} />
  </p>
  <Comments type="old"/>
</div>
