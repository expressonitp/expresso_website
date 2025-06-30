import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { title } from "process";
import { images } from "@/next.config";
// import {NavLink, Navigate, useNavigate} from 'react-router-dom' ;

const Event = () => {
  const [events, setEvents] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [overlay, setOverlay] = useState({ isOpen: false, image: null });

  const router = useRouter();

  const goBackHome = () => {
    router.push("/"); // Replace '/' with the path to your home page
  };

  const fetchEventData = async () => {
    const data = [
     {
        id: 0,
        title: "ARTOPIA 2025",
        description: `ARTOPIA was a vibrant three-day online art workshop organized by Expresso – The Literary and Art Club, NIT Patna, bringing together artists, creators, and enthusiasts to celebrate the power of artistic expression. The event featured renowned artists who shared their expertise, guiding participants through different artistic styles, techniques, and storytelling methods.

        The event featured three exclusive workshops:
        
        - Fusing Tradition with Digital Art – Led by Aman Varma, this session explored the fusion of traditional artistic elements with modern digital tools, showcasing how heritage and technology can blend seamlessly in digital art.
        
        - Storyboard Saga – Conducted by Vibha Rao, this workshop delved into the art of visual storytelling through comics and animation, capturing the nuances of characters, emotions, and everyday narratives.
        
        - Heritage Hues – Guided by Vidushini Prasad, this session celebrated the intricate beauty of Madhubani painting, highlighting its rich cultural significance and timeless artistic traditions.
        
        
        More than just a series of workshops, ARTOPIA was a creative space where imagination thrived, stories unfolded, and artistic passions were ignited. It was a journey of learning, exploration, and inspiration—one that encouraged participants to push their creative boundaries and embrace the magic of art.`,

        images: [
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839067/ArtopiaPoster_tn8yvl.png",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839053/Vidushini_Prasad_cd7vyi.png",
          // "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839051/Vidushini2_ohning.png",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839051/VibhaRao2_a79mkp.png",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839053/AmanVerma2_scmmvo.png",
          // "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748253/AmanVerma1_i0kroi.pngg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839050/26vibharao_pvwx7x.png",
        ],
      },

      {
        id: 1,
        title: "MUN 2.0",
        description: `The vibrant campus of NIT Patna was once again immersed in the spirit of diplomacy and debate as Model United Nations (MUN) 2.0 took place on 13th, 14th, and 15th September 2024 at Ashok Rajpath Campus. This second edition provided students a unique platform to simulate the workings of the United Nations and hone their diplomatic skills.

        In this edition, we had four committees to facilitate proceedings:

        1. General Assembly (UNGA): For addressing global challenges with collaborative action.
        2. Security Council (UNSC): Resolving pressing security issues as world leaders.
        3. Joint Parliamentary Committee (JPC): Simulating parliamentary discourse to tackle national concerns.
        4. International Press (IP): Reporting the vibrant discussions and providing critical insights into the proceedings.

        The event commenced on the first day with an introduction and opening ceremony, setting the stage for three days of insightful discussions. The second day focused on the Joint Parliamentary Committee (JPC), which delved into national concerns with legislative precision, while the International Press (IP) began its diligent coverage of the proceedings.

        On the third day, the General Assembly (UNGA) and Security Council (UNSC) tackled global challenges and security concerns, with the IP continuing its comprehensive reporting. The event concluded on a grand note in the evening of the third day, with the winners' announcement, certificate distribution, and prize ceremony, recognizing the outstanding contributions and performances of the participants.

        MUN 2.0 offered an unparalleled platform for students to hone their public speaking, negotiation, and analytical skills while gaining practical exposure to the intricacies of international diplomacy and legislative processes. This edition set a new benchmark for intellectual events on campus, leaving an indelible mark on its participants.`,
        images: [
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750684830/MUN2.0c_rvaume.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750684829/MUN2.0b_pv4uux.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750684828/MUN2.0a_cxov88.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750684829/MUN2.0d_qjbhiz.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750684830/MUn2.0f_bedkfi.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750684831/MUN2.0e_wmvj6h.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750684831/Mun2.0g_nvaflc.jpg",
        ],
      },
      {
        id: 2,
        title: "AAWAAZ",
        description: `The NIT Patna , under the collaboration of Expresso - the Literary & Art Club and Saptak - the music club hosted a captivating event , AAWAAZ Shayari and Ghazal Night on 13th September, 2023 from 5:30 pm onwards in the ever lively C.V. Raman Hall.

        The attendees were treated to a mesmerizing display of poetic prowess, as each poet shared their unique perspectives and interpretations of love, life, and the human experience.

        AAWAAZ was a resounding success , leaving a lasting impression on everyone who attended. This was possible only due to the amazing cooperation and active participation of the members of both the fantastic clubs of NIT Patna, Expresso - The Literary & Art Club & Saptak - The Music Club.`,
        images: [
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750838992/DSC_1605-min_no52ku_zofsei.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750838992/_DSC0125-min_svrzfd_uozw88.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750838992/DSC_1209-min_m72xo1_jrfe3q.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750838991/DSC_1139-min_otyjxt_kwvpat.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750838992/DSC_1109-min_ots81r_yhpp8k.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750838991/DSC_1000-min_muw1j2_isxjm2.jpg",
        ],
      },
      {
        id: 3,
        title: "Dil se Canvas",
        description: `Expresso is all about expressing yourself, and this time you can do it in “Dil Se Canvas”. This is one of the awesome events of Expresso, where two artists team up to create magic on a canvas! First, one artist starts with the theme, then they swap, and the other finishes it. Organized at CV Raman Hall on March 3rd, 2024, at 5:00 pm, so just grab your partner now and unleash your creativity. We will give you paint and you’ll give us painting. 
        Let your creativity shine!`,
        images: [
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839115/DSC_0315_or0tbe_dkutlo.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839107/DSC_0577_azsv6w_nfcjs0.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839106/DSC_0350_enk09r_px0kee.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839106/DSC_0557_rr8kzw_utwmvv.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839105/DSC_0471_tujzyg_yhwbvb.jpg",
        ],
      },
      {
        id: 4,
        title: "MUN",
        description: `The aroma of NIT Patna immersed in Diplomacy as the first ever Model United Nations (MUN) of the campus commenced on 9th and 10th September of 2k23 in the Visvesvaraya Hall. MUN acts as a simulation of the working of United Nations giving students the opportunity to act like delegates representing their allotted nations.

        In our edition we had 3 committees to facilitate proceedings namely 
        1.General Assembly: For tackling global challenges with wide coordination.
        2.Security Council: Resolving security concerns as world leaders.
        3.International Press: To give a sneak peek of international proceeding to masses.
          
        The curtain rang up on the first day with General Assembly and rang down on the following day with Security Council, while the press covered both the proceedings.
        
        Participants enjoyed the festivities and got exposure to International Diplomacy reporting a significant enhancement in their public speaking and planning skills.`,
        images: [
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839223/DSC_0418_lclzcs_eak7wo.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839224/DSC_0425_yqggxl_exir2c.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839225/DSC_0463_xldm72_xpvbf5.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839226/DSC_0854-min_csyyht_coszqq.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839227/DSC_0912-min_enfu1i_sghdmd.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839235/DSC_0928_fyldz7_xoml4k.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839224/DSC_0925-min_peci2j_hnrldi.jpg",
        ],
      },
      {
        id: 5,
        title: "Tcf_Sanhita",
        description: `Literature and debate are twin pillars of intellectual growth; while literature enriches our minds with diverse narratives and profound truths, debate sharpens our ability to challenge, defend, and refine those ideas through rigorous discourse.

        During TCF'24 , the Literature and Art Club of NIT Patna, Expresso  organized a series of stimulating debates under the event named SANHITA '24 . Each of the debates had many teams each consisting of 3 members.
        
        The event consisted of :
          1. Parliamentary Debate
            - Teams argue for or against a motion in a formal, structured format, simulating parliamentary procedures. Participants must use logic, evidence, and rhetoric to defend their stance, with a focus on quick thinking and teamwork.
          2. English Debate
            - Teams debate on various topics in English, focusing on clear articulation, strong arguments, and rebuttals. The emphasis is on language proficiency, critical analysis, and persuasive speaking skills.
          3. Hindi Debate
            - Similar to the English Debate but conducted in Hindi, this event challenges participants to demonstrate their debating skills in their native language, promoting cultural and linguistic diversity.      
          4. Turn Coat
            - A single participant must argue both for and against a given topic, switching sides at designated intervals. This format tests the debater's ability to understand and articulate both perspectives, showcasing flexibility and comprehensive understanding of the subject.
          5. Story Wars
            - Teams of three are given a picture and tasked with collaboratively writing a story based on it. This event,emphasizes creativity, teamwork, and narrative skills, allowing participants to explore imaginative storytelling.
        
        These events saw enthusiastic participation from students across various disciplines, engaging in thought-provoking discussions on diverse topics. The debates highlighted the power of critical thinking, fostering an environment of intellectual curiosity and lively discourse.
        `,
        images: [
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839238/DSC_0040-min_yyhy2b_mvy3xf.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839239/DSC_0070-min_h8bjbh_li3y8y.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839246/ygureoalb5qt6cackftr_fwmzaz.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839241/kqivfztpeiqbdcqmxyzg_bygna1.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839239/DSC_0049-min_x1ezlc_wjy4wa.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839241/DSC_0205.JPG-min_d58qfe_etszqb.jpg",
        ],
      },
      {
        id: 6,
        title: "Kitabe Padho Behas Nhi Tark Do..",
        description: `"Books are our Bestfriends , windows to the World."
        
        EXPRESSO: The art and literary club of NITPatna started an online Event called " किताबे पढो - बहस नही तर्क दो   "..on 1st March, 2024.

        Every month a Book is started in which on each Wednesday and Sunday a content derived from the book is posted  on Instagram handel of Expresso.

        - March was the month of Book- “CHANAKYANITI” by acharya Chankya ..

        Chanakyaniti is a collection of aphorisms composed by Chanakya. It is a set of ideas and statements given by the acharya  Chankya  many of which give valuable tips on how to lead a good and productive life even in this day and age.

        - April was the month of “MADHUSHALA” by harivanshrai bachchan .

        Madhushala is a classic poetry book. The poetic narrative symbolises life as a tavern or a public drinking place. It teaches us to have a must life goal otherwise we will live in distraction and get deviated on life.

        - May was the month magic love with " Gunaho Ka Devta " by Dharamveer Bharti .

        The novel tells the passionate love story of Chander and Sudha. The book also addresses moral and ethical concerns . The main character, Chander, is a complex man who struggles to balance between his loyalty to his friend Pammi and his desire for Sudha. The story examines the tension between obligation and desire, as well as effect of our decisions.

        - June was the month of Enlightenment with " GOD OF LITTLE THINGS " by Arundhati Roy

        It is a story about the childhood experiences of fraternal twins whose lives are destroyed by the "Love Laws" prevalent in 1960s Kerala, India.This novel explores love and how love can't be ignored when confronted with social boundaries. 
        The novel examines how conventional society seeks to destroy true love as this novel is constantly connected to loss, death and sadness.

        This series will stay continued and will bring  best out of bestBooks to the readers & learning enthusiasts...`,
        images: [
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839187/WhatsApp_Image_2024-06-24_at_13.31.00_431c578a_dsei1c_mwvtqh.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839188/WhatsApp_Image_2024-06-24_at_13.31.17_4a5d86a9_zuimrw_qdlcha.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839193/Blue_and_White_Modern_Minimalistic_About_Us_Instagram_Story_qdnjkg_canjra.png",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839184/the_alchemist_vxot9e_n4hh7j.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839184/WhatsApp_Image_2024-06-24_at_13.29.24_b672cd16_oaspu9_bgntwc.jpg",
        ],
      },

      {
        id: 7,
        title: "TCF_Avlokan",
        title: "TCF_Avlokan",
        description: `"The power of a mastermind lies in their ability to see the bigger picture and connect the dots"!
        Expresso - Literary and Art Club of NIT Patna organized a series of events under Avlokan in TCF '24, providing an opportunity to hone your abilities and talents in the fun-filled hours of dares, wisdom, writing, and spelling.

        Avlokan brought together students with a passion for intellectual pursuits, spelling prowess, and creative writing. The event kicked off with Spelling Bee and Geek-O-Brain on January 24th, followed by Don't You Dare And Nazm on January 26th.

        1. Geek-O-Brain explored the knowledge, analytical and critical thinking skills of the individuals by a quiz based on diverse topics, an interesting and informative sub-event for participants as well as the audience.

        2. Spelling Bee showcased the linguistic prowess of students, it accommodated a wide range of vocabulary and challenged participants appropriately, consisting of two parts - Rapid Fire Spell-it-out and Unscramble.

        3. Nazm highlighted the creativity and poetic skills of the participants as they presented shayri and poems incorporating a specific trigger word. The team with the most creative and skillful poetry were crowned the Nazm event champions.

        4. In Don't you Dare, participants were given a dare to perform through chit-selection in the allotted time. The event was individual participation and participants performed the dare among excitement and laughter.

        Following these enthusiastic and spirited events, participants found a sense of belonging in the literary and artistic community at NIT Patna, recognizing the talent and skills of all involved.`,
        images: [
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839098/DSC_0019_aqsksv_fezlym.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839090/DSC_0033_sfmnos_knieyh.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839085/DSC_0131-min_lhuxhj_ibezzw.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839085/DSC_1519_1_-min_tvsokp_jj2cgl.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839085/DSC_1495-min_ygyfrv_udyt0g.jpgg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839084/DSC_0141-min_bgb6wx_kcet0b.jpg",
        ],
      },
      {
        id: 8,
        title: "Doodle Your Day",
        description: `"Art is the language of the soul, speaking volumes where words falter, and painting colors of humanity’s shared journey."

        "Expresso" - the art and literary club of NIT Patna had organized an interesting event on 15th April at the front of Architecture department as we celebrated World Art day with our exciting event, Doddle your day.

        Doodling made a creative outlet, relaxation, and sometimes unexpected inspiration. It’s a way to let your mind wander and express itself freely. On that evening every detail find its place in the tapestry of time. Each doodle captures a fragment of time, weaving together the story of the day well-lived.`,
        images: [
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839208/axcydddh8inosewkw6ib_v4i7mt.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839220/jpt3rfwfezahxift1nfx_fnhbar.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839215/qbl6agtu7pvi3kjpue4k_lxunif.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839213/do5oiaaypdhucdcrknsr_mkzcbk.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839207/jsrhtiekttxkehfkboaa_szz6sc.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839201/DSC_0500-min_hfmyaz_zkgi60.jpg",
        ],
      },
      {
        id: 9,
        title: `Valentine's Week`,
        description: ` What's better than sharing your feelings and thoughts to your favourite person without the fear of judgement, that too in the love-filled and heartfelt week of valentine's.

        Expresso organised a fun event during the valentine's week from 7th to 14th February titled 'Love is in the air' which allowed everyone to pour their heart out anonymously.
        
        The club's social media handle acted as a messenger to deliver the special messages in a secret way, i.e without letting the receiver know about the one who wrote the message.
        
        This event allowed students to nurture new connections that enhanced their social experiences in the college and created a vibrant and inclusive environment which celebrated different forms of love and connections. `,
        images: [
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839250/IMG_0006_etbsyw_rgdme8.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839250/IMG_0003_pyrmvj_oskmwm.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839249/IMG_0005_gjfc1x_mmbfz1.jpg",
        ],
      },
      {
        id: 10,
        title: "Movie Matinee",
        description: `Expresso’s Signature Event, Secret Valentine, brought an unforgettable cinematic experience to NIT Patna  with the screening of Sita Ramam! 

        As part of the broader Secret Valentine celebration, Movie Matinee was organized by Expresso, the Art and Literary Club of NITP.
        
        On February 9th, 2024, at Meghnad Saha Hall, we gathered to celebrate Valentine’s week filled with drama and love. Starting at 5:30 PM, the event transformed the hall into a hub of excitement and anticipation.  The atmosphere was electric as the lights dimmed and Sita Ramam began, promising to deliver not just a movie, but an experience that resonated deeply with each viewer. The film’s compelling narrative of love and connection was perfect for the season of romance. 
        
        It was more than just a movie night; it was a communal celebration of storytelling and shared emotions, all orchestrated by Expresso.
        
        The event truly highlighted the magic of cinema in bringing people together, making it an evening to remember.
        `,
        images: [
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839198/n3b8puwcjgzlrexwwxrc_foseec.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839199/ulms1l2zpxdsb4nt7dgj_wbwb80.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839195/fpll0rjzfbgcf8cd68gx_aba8uv.jpg",
        ],
      },
      {
        id: 11,
        title: "Portrait Palooza and Tattoo Booth",
        description: ` The artist and their passionate immersed in two great event under the Expresso named as Portrait Palooza and Tattoo Booth on 10th February, 2024 from 2.30 pm onwards at Pmc offering a vibrant blend of live tattooing and portrait artistry. 

        Attendees could witness skilled tattoo artists at work, getting inked with unique designs or watching as intricate portraits came to life on canvases.
        
        The event was a haven for art lovers, featuring interactive sessions where participants could learn about tattoo techniques and portrait drawing. It was a day of creativity, inspiration, and the celebration of artistic expression.
        `,
        images: [
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839251/IMG_0007_ohhvzp_gkrayh.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839252/IMG_0002_qpnh9g_bkwvlg.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839248/IMG_0004_wqvpe2_smx8qv.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839248/IMG_0001_bvb8yq_ut7y80.jpg",
        ],
      },
      {
        id: 12,
        title: "Tcf_Kalakriti",
        description: ` Art is the expression of emotions and beauty in a creative manner that stirs the soul ….. 

        “ _Expresso_ “-the art and literary club of Nit Patna , organised “ _kalakriti_ “ an event under TCF ’24 calling all the artists to unleash their artistic spirit in the most creative and amazing manner. The event was comprised of multiple sub-events with a 2-3 member participation in each group in a never seen before interesting way!         
        
        It had a total sparks of ten events :-
          1. Dye verse 
            - a ‘T-shirt painting ‘competition …. One of the most interesting events according to all the participants…         
          2. Frame the Face 
            -  a competition where you would get to paint the face of people in the surroundings….                 
          3. No Brushes 
            - painting was to be done based on a theme but without using any brush .
          4. Caricature-Culture - a cartoon character making competition which reminds us of our childhood memories……        
          5. DoodleFiesta 
            - a solo competition of doodle making with creativity and talent….   
          6. Safar e Rangoli 
            - a 3 membered competition to make a colourful rangoli based on a given theme .. 
          7. Clay- clash 
            -it reminds us of the fragnance of depicting our hidden talent….a two membered competition to craft a clay model based on instant theme…… 
          8. TattooFiesta 
            - this is the event of creating tatoo on the arm of the random people with their own creativity and originality…. 
          9. CineFrame 
            - based on originality and visualisation participants have to frame the given theme work…         
          10. Mosaic-Marvel 
            - collage making event with solo or group of 2 participants… 
        
        These idiosyncratic ideas and interesting events encourage the participants to show their talents and creativity with the enhancement by glorifying their qualities ....
        `,
        images: [
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839131/DSC_0309_skbnfn_iejpxr.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839138/DSC_0336_gf8r9a_mg3nej.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839130/DSC_0132_aq6fnv_zrpei9.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839124/SHL05224_q8ohq7_jaeetn.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839140/DSC_2293_wqlngs_jhuhhu.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839129/DSC_0014_bjs5cd_do8mkf.jpg",
          "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750839123/_DSC0041-min_ktj7ya_lusb5k.jpg",
        ],
      },
    ];
    setEvents(data);

    const initialImageIndex = data.reduce((acc, event) => {
      acc[event.id] = 0;
      return acc;
    }, {});
    setCurrentImageIndex(initialImageIndex);
  };

  useEffect(() => {
    fetchEventData();
  }, []);

  const handleNextImage = (eventId) => {
    setCurrentImageIndex((prevState) => {
      const event = events.find((event) => event.id === eventId);
      return {
        ...prevState,
        [eventId]: (prevState[eventId] + 1) % event.images.length,
      };
    });
  };

  const handlePrevImage = (eventId) => {
    setCurrentImageIndex((prevState) => {
      const event = events.find((event) => event.id === eventId);
      return {
        ...prevState,
        [eventId]:
          (prevState[eventId] - 1 + event.images.length) % event.images.length,
      };
    });
  };

  const openOverlay = (image) => {
    setOverlay({ isOpen: true, image });
  };

  const closeOverlay = () => {
    setOverlay({ isOpen: false, image: null });
  };

  return (
    <div className="flex flex-col bg-[#4B4B4B] h-full pt-4 px-4 sm:px-8 sm:justify-center">
      <button
        className="self-end h-[29px] w-[109px] mb-4 sm:mb-0"
        onClick={goBackHome}
      >
        <div className="flex gap-1 flex-row-reverse items-center">
          <div className="text-white text-xl font-antonio pb-1">BACK</div>
          <div className="border-2 rounded-full border-white p-1">
            <Image
              src="https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748459/Arrow2_epdbhb_e4ldhi.png"
              width={20}
              height={20}
              alt="Arrow"
            />
          </div>
        </div>
      </button>

      {events.map((event, index) => (
        <div
          key={event.id}
          className={`flex flex-col sm:flex-row items-center sm:items-${
            index % 2 === 0 ? "start" : "end"
          } mt-4 gap-4`}
        >
          <div
            className={`w-full sm:w-auto ${
              index % 2 !== 0 ? "sm:order-2" : ""
            } `}
          >
            <div
              className="relative  h-80 w-80 lg:mx-4 overflow-hidden rounded-full border-4 border-[#FEB952] cursor-pointer mx-auto shadow-lg shadow-slate-100"
              onClick={() =>
                openOverlay(event.images[currentImageIndex[event.id]])
              }
            >
              <Image
                src={event.images[currentImageIndex[event.id]]}
                layout="fill"
                objectFit="cover"
                alt="Event Picture"
              />
            </div>
            <div className="flex items-center justify-center mt-2 text-white text-[24px] font-bold p-2">
              <button
                onClick={() => handlePrevImage(event.id)}
                className="px-2"
              >
                {"<"}
              </button>
              <span className="px-4">
                {currentImageIndex[event.id] + 1}/{event.images.length}
              </span>
              <button
                onClick={() => handleNextImage(event.id)}
                className="px-2"
              >
                {">"}
              </button>
            </div>
          </div>
          <div className="flex flex-col w-full sm:ml-4 lg:mx-16 ">
            <div
              className={`font-antonio text-white text-2xl sm:text-5xl ${
                index % 2 !== 0 ? "text-right" : ""
              }`}
            >
              {event.title}
            </div>
            <div
              className="text-[#ffffff] text-base sm:text-lg bg-cover bg-center p-4 mt-4 mb-6 whitespace-pre-line overflow-y-auto max-h-64 rounded-2xl"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748578/HomeBg1_bzalmy_g7mbge.png')`,
              }}
            >
              {event.description}
            </div>
          </div>
        </div>
      ))}

      {overlay.isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeOverlay}
        >
          <div className="relative w-4/5 h-4/5">
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeOverlay}
            >
              &times;
            </button>
            <div className="flex justify-center items-center h-full">
              <Image
                src={overlay.image}
                layout="fill"
                objectFit="contain"
                alt="Overlay"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Event;
