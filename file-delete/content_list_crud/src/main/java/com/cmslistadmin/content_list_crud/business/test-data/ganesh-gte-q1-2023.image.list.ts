
import { PicDescr, ImageElement } from './image.list'

export class GaneshGTEQ12023ImageList {
 sort: string = 'asc'
 bulkImageList:PicDescr[] = [
    {  
        fullFileName: `assets/all-images/religion/shree-ganesh/Aumkar-Ganesh-sept-2020-final.jpeg`, 
        description: `
           <ul><li>One of my first 'properly, patiently' drawn sketches, Sept 2020</li></ul>
           ` }, 
        {  fullFileName: `assets/all-images/religion/mahadev-family/AumGaShivParKashiVishwCTLightNov172020Final.jpeg`, 
           description: 
           `Attempt to sketch <em>based on</em> the sculpture overlooking the main shivling room Kashi Vishweshwar Temple Citilight, Mumbai
           <br/>Nov 17 2020`},
           {  fullFileName: `assets/all-images/religion/mahadev/unsignedShivVeena12272020.jpeg`, 
           description: 
            `<ul><li>Watching a Lord Shiv song an YouTube, I chanced upon the original sketch that inspired me to draw this</li>
            <li>Actually, if I am guessing right this is based on the famous tele-serial 'Devon Ke Dev Mahadev' and 'Shivji' here is Mohit Raina</li>
            <li>So face accuracy, kindly condone under 'artist's license'</li>
            <li>One that I took a long time over - probably started Dec 1st weel 2020, Shared publicly on Dec 27 2020</li></ul>`},

            { fullFileName: `assets/all-images/religion/shree-ganesh/ShreeSiddhivinayakQ42020.jpeg`, 
                 description: 'Siddhivinayak Temple, Prabhadevi, Mumbai, India attempt to sketch' },
            { fullFileName: 
                  `assets/all-images/religion/devi/DeviMaaMay13-18-2021.jpeg`, 
                  description: `<ul><li>An 'unplanned' sketch:</li>
                  <li>One of my fellow devotees at Shirdi Sai Temple and I keep jesting, joking pulling each others leg.</li>
                  <li>She posted the photo, on which this is based, I think, 1st Thursday of May 2021. I took a week and this was ready May 13th.</li>
                  <li><em>(Sometimes I keep a good handle on dates)</em></li></ul> ` },
                  { fullFileName: 
                     `assets/all-images/planes/mix-gen-plane-sept-2020.jpeg`, 
                     description: `<ul><li>The One that started it ALL!!</li>
                     <li>Began revisit to my mothballed hobby with this, I think Sept 9 2020</li>
                     <li>Had a DC-10, Boeing 777-X and 737 (note radar hump before tail) in mind, so.. merged them into this</li></ul> ` },
]
public allImageList:ImageElement[]  =  [
   { 
        folder:'shree-ganesh-gte-q4-2021',
        theme:'Shree Ganesh',
        themeSummary:
        `Vigneshwar, Aumkar, Gamapati, Vignahartha - The Lord Ganesh, remover of Obstacles. Sketches Q1 2023 onward`,
        files: [
         {

             // /Users/shantanu/Documents/GitHub/js-frameworks/Angular_lte_4/shan-cms-template/src/assets/all-images/religion/shree-ganesh-gte-q1-2023/Ganesh-1-March1723.jpeg
            fullFileName: `assets/all-images/religion/shree-ganesh-gte-q1-2023/Ganesh-final-GudiPadwa-March22-2023.jpeg`,
            description: `Ganapati - Gudi Padwa 02/22/2023. <br/>
                         final version - photo edited
                         <p>A first of sorts - I have begun drawing flowers and chanced upon a theme of surrounding the main sketch with these</p>
                          <p> probably do others e.g. use dolphins around a sailing ship sketch`,
            dateUploaded: '03-23-2023',
            canvassSize: 'A4', content:'color-pencil',
               rating: 1,
               ratingYear:2023,
            iterations:[
               { 
                  fullFileName: `assets/all-images/religion/shree-ganesh-gte-q1-2023/Ganesh-final-GudiPadwa-March22-2023.jpeg`,
                  description: `Ganapati - Gudi Padwa 02/22/2023. <br/>
                         final version - photo edited
                         <p>A first of sorts - I have begun drawing flowers and chanced upon a theme of surrounding the main sketch with these</p>
                          <p> probably do others e.g. use dolphins around a sailing ship sketch`,
            },
               { 
                  fullFileName: `assets/all-images/religion/shree-ganesh-gte-q1-2023/Ganesh-3-March17-22-2023.jpeg`,
                  description: `Ganapati - Gudi Padwa 02/22/2023. <br/><ul><li>completion before photo edit</li></ul>`},
               { 
                fullFileName: `assets/all-images/religion/shree-ganesh-gte-q1-2023/Ganesh-2-March17-22-2023.jpeg`,
                description: `Ganapati - Gudi Padwa 02/22/2023. <br/><ul><li>Outline completion</li></ul>`},
             { 
                fullFileName: `assets/all-images/religion/shree-ganesh-gte-q1-2023/Ganesh-1-March1723.jpeg`,
                description: 'Ganapati - Gudi Padwa 02/22/2023. <br/><ul><li>03/17/2023  - initial iteration</li></ul>',
             }
                ] 
           },
         {
            fullFileName: `assets/all-images/religion/shree-ganesh-gte-q1-2023/Ganesh-Sai-Veena-Saraswati-pooja-012623.jpeg`, 
            description: `<ul>
            <li>SHree Ganesh with Baba theme (als completed) on Jan 26 2023 Saraswati Pooja - (Baba with Veena)</li>
            <li>scanned</li>
            </ul>`,
            dateUploaded: '01-29-2023',
            
         },
         {
            fullFileName: `assets/all-images/religion/shree-ganesh-gte-q1-2023/Ganesh012323-Magh.jpeg`, 
            evolution: `<ul><li> Besides my 1st only Ganesh on 11x17, this is a new sub category Ganesh Q1 2023</li></ul>`,
            evolutionSequence:3, 
            evolutionDate: '01-23-2023',
            description: `<ul>
            <li>My first 11x17 all exclusive Ganesh in color.. Maagh Month 2023 .. Completed Jan 23 </li>
            </ul>`,
            dateUploaded: '01-23-2023',
            
         },
      ], // all list
        // GaneshSwamiDec18-22-2021-1.jpeg
    },
   ];
 }
