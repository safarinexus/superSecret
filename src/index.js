console.log('initiated'); 

import './style.css';

//adding the notes
import addNote from './modules/addNote';
import congNote from './modules/congNote';
import melPhotos from './modules/photoAdders/melPhotos'; 
import alyssaPhotos from './modules/photoAdders/alyssaPhotos';
import valleriePhotos from './modules/photoAdders/valleriePhotos'; 
import siqiPhotos from './modules/photoAdders/siqiPhotos'; 
import vaniaPhotos from './modules/photoAdders/vaniaPhotos'; 
import shannaPhotos from './modules/photoAdders/shannaPhotos'; 
import congPhotos from './modules/photoAdders/congPhotos'; 
import bernicePhotos from './modules/photoAdders/bernicePhotos'; 
import kimPhotos from './modules/photoAdders/kimPhotos';
import zanePhotos from './modules/photoAdders/zanePhotos';
import xinjiePhotos from './modules/photoAdders/xinjiePhotos';
import kyliePhotos from './modules/photoAdders/kyliePhotos';
import narenPhotos from './modules/photoAdders/narenPhotos';
import introFade from './modules/introFade';
import hpbdAnimation from './modules/hpbdAnimation';
import confettiEffects from './modules/confettiEffects';
import imageSliders from './modules/imageSliders'; 
import imageSliderLoader from './modules/photoAdders/imageSliderLoader';
import lovedOnesAnimation from './modules/lovedOnesAnimation'; 
import cardAnimations from './modules/cardAnimations'; 

document.addEventListener('DOMContentLoaded', () => {
    // Add 'noscroll' class to body to disable scrolling
    document.body.classList.add('noscroll');
});

//reset scroll on reload
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
//load image slider images 
imageSliderLoader();
imageSliders();


//scroll fade animation 
introFade(); 

//hpbd animation
hpbdAnimation(); 

//confetti effects
confettiEffects(); 

//loved-ones text animations
lovedOnesAnimation();

//card animations
cardAnimations();

//adding people notes
//mel
addNote('mel', 'happy bday baby 😗😗 you’re living and thriving and I love that so much. keep slaying and being gorjus as always. So now that you’re 21 I can bring you to the strip clubs right 😁😁😁😁 We need to take more pics together fr… All Edgar’s fault 🙄🙄 ', true);
melPhotos();

//alyssa 
addNote('alyssa', 'hey bbg, happiest birthday !! thanks for always being so down to do anything !! ure literally my twin, from dressing the same (matching unintentially all the time) to now even saying the same things, it’s actually quite creepy 💀 thank you for being the bubbliest girlie all the time and ofc the girlie that literally pulled syaxan babis tgt 🫶🏻 i hope u have the happiest and best 21 😚 thank u for being my friends and let’s make more memories tgt !! LOVE YOU SO MUCH MUACKS and continue brewing that tea 🍵 i’ll be the teacup to ur teapot 😉', true);
alyssaPhotos();

//zhi qian
addNote('zhi qian', "Happy Birthday Kyla!!🎂 It's officially 21 now BIG GURL!! Im so glad to know you from emix and I rly miss those times when we all just come tgt and yap all day HAHAHAHA jst wanna say thank you for being there when i feel down and helping me when im feel lost. I rly appreciate everything you did for mee 🩷LOVE U MUA 💋I oso wanna tell you tht i rly respect you alot, putting your heart and soul, sacrificing your sleep just for emix. You are doing really great okay, dont let anyone or anything affect you and you def deserve all the rewards and happiness that comes your way❣️ Always rmb that im here for you if u need anything okay!! && Hope you have a blast on your birthday and may all your wishes come truee!! Also Last long with edgar~ yall v cute!! hehe 😉");

//vallerie
addNote('vallerie', "HELLO KYLABONGBONG HAPPY 21st BIRTHDAY YAYYYY ❤️❤️❤️ thank you for being such a great friend and i’m so proud to see you grow in emix especially as a vp hehe PLS TAKE CARE OF YOURSELF AND STOP FALLING SICK 🤬🤬🤬 hope you know that syaxan will always here for you,, don’t be too hard on yourself okieee can’t wait to see you grow even more as a dancer huehue hopefully you’ll be my choreog next time 😆😆😆 enjoy your 21st bday and i can’t wait for our next tea sesh tgt <3 love you!!!", true);
valleriePhotos();

//si qi
addNote('siqi', "HAPPY 21ST MY DEAR!!!!! honestly the “meeting twice” theory is saur true bc i knew u in sn but we only got closer aft jc ori heheehhahahah so grateful u entered my life la u adorable ball of sunshine <3 although we dont meet super often, i know i can count on u hehehe n it’s alw a good time w u la mi amor~ u were an integral part of my teens n now an integral part of my adulthood n i love u!!!!!! so much!!!!!!!!!!", true); 
siqiPhotos();

//vania
addNote('vania', 'happy birthday ms kyla vp!!!!! so thankful for you and to be working with you through timeless and exco :"") continue to shake ass and stay a slaying queen in EMIX hehe sORRY IDH any meaningful photos w u kyla :-((( ur face when ryan was talking was priceless HAHHAHA', true); 
vaniaPhotos();

//shanna
addNote('shanna', 'dear kyla, happiest 21st bd <3 so happy to have met u thru emix and omg blaw class wow tb and we became so much more closer thru sxayan!! v grateful for all the amazing memories we shared tgt, esp all the fun an laughter we had throughout the past 2 years (omg so long alr….) know that you’re doing such a great job as an exco and i’m always v proud of u!!! tho i don’t always come for emix HAHAHAHA OOOPS my heart is still w emix & and i’ll be supporting u from outside still keke HOPE OUR FS W SYAXAN REMAINS SO SLAYYYYY AND JIAYOUS IN everything that you do okie, U GOT THIS! also u and edgar must go a long way ok, i wan to witness the real thing without edgar saying “she’s too small for me” HAHAHAHAHAH love you lots girl!!! muacks 💗💗💗', true); 
shannaPhotos();

//cong 
congNote();
congPhotos();

//bernice
addNote('bernice', 'happy 21st bitch. its been SO MANY YEARS together and im so absolutely proud of what youve achieved and the shit you had to overcome regardless of the situation. you are one tough little shit and honestly thank you for always being you. youre still the smartest, most bubbly and random girl, almost exactly the same as when we met (kidding i dont rmb alot from our childhood 😭) but yes. growing up with you has been such an interesting journey but i wouldnt wna have it any other way. wishing you happiness always my girl, theres so much more things to explore and experience and i hope you manage to enjoy them all ❤️ happy 21st girlie i love you so so so much 🎀😚', true); 
bernicePhotos();

//kim 
addNote('kim', "happy 21st bday love!! i'm so thankful to have met you in uni and get to know you better as time passed! your presence is always so pleasant to have and thank you for always including me in plans that don't always involve my batch / friend group!! very very thankful for you <33 and you are so capable and i'm very proud of what you have achieved so far!! you are such a strong and stable gurlie and just keep doing what you have been doing ok!! i will always be here to support you / talk to you / just sit there in your presence! love u bbg", true); 
kimPhotos();

//zane 
addNote('zane', "happiest twenty first kyla! this is the peak of your youth. it is your time to shine, dont shy away from the truth. everyday you’ve been slaying, figuratively and verbally. have an amazing birthday, and you should come work more frequently. ", true); 
zanePhotos();

//xin jie 
addNote("xin jie", "HARLO miss hottie sexy girlie gailabongbong HAPPY 21ST!!!!!! I'm sosososososo proud of you for growing so much the past year and I am very very happy that I got to do exco with you aJKSDFHKDLJGHl I CANT IMAGINE BEING THE ONLY SYAXAN DOING EXCO EH 😭😭😭😭 thanku for always matching my freak and nastayyy and being the baddest bitch hype man please sleep and drink water you're not a fucking cactus ok bye love you mwah💋💋💋", true); 
xinjiePhotos();

//kylie 
addNote("gailie cho", "hello gaila bong! happy 21st birthday <3 i’m super glad we managed to get closer this year and i am really thankful for our friendship! thanks for alws yappin w me and hanging out tgt 😙 hope you have an enjoyable bday and see you soon ~ hehe", true); 
kyliePhotos();

//naren 
addNote("naren", "HAPPY 21st MISS GWORLL!!! SO GLAD TO HAVE MET YOU AND LOVE HOW OUR VIBES ARE JUST SO CRAZY AND STOOPID. THANKS FOR ALL THE SUPPORT AND ALWAYS HEARING ME OUT AND JOINING ME IN FOR ALL THE JUICY TEAA  HAHAHA. STAY FUN, CRAZY AND GORG AS YOU ALWAYS ARE. MISS HANGING OUT WITH YOU GUYSSS. CHEERS TO MORE MEMORIES WITH YALL SOON. HAVE A FANTASTIC 21 MAHN🥳🥳✨", true); 
narenPhotos();

window.addEventListener('load', () => {
    // Remove 'noscroll' class from body to enable scrolling
    document.body.classList.remove('noscroll');
});