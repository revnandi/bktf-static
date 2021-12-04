import React from 'react'
import * as styles from './main.module.scss';

import Content from './content';

const Main = () => {
  return (
    <main className={ styles.container }>
      <section>
        <Content>
          <img src="https://picsum.photos/1058/504" alt="" />
          <div>
            <h1>
              Nem táncokat tanítunk,<br/>
              hanem táncolni tanulunk.
            </h1>
            <p>Angelus Iván, alapító rektor</p>
          </div>
          <div>
            <p>A hároméves táncművész képzés a kortárstánc területén végzett hivatásos előadói és alkotói munkára készít fel. A program középpontjában a hagyományos és újító tánctechnikák megismerése áll, amelyek a technikai képzés, a mozgáskészségek fejlesztése, a testtudati munka és az integrált elmélet és gyakorlat alapjain nyugszanak.
            Fejlesztői szemlélettel, az egyéni és csoportos tanulási folyamatok egyensúlyával, komplex értékelési rendszerrel, valamint reflektivitást és kreativitást elősegítő módszerekkel támogatjuk diákjaink fejlődését. Diákjaink hazai és külföldi táncpedagógusok, valamint szakmailag aktív művészek útmutatása mellett, egy kreatív közösség részeként transzferábilis tudásra tehetnek szert. A képzés támogatja, hogy hallgatóink kísérletező, kutatásalapú alkotói gyakorlatot alakítsanak ki, valamint egyedi, hiteles előadói hangra leljenek rá. A formát öltő előadói vagy alkotói énkép nélkülözhetetlen attribútumai a kíváncsiság, a bátorság és az elhivatottság, továbbá a társadalmi és kulturális környezetre való érzékenység és nyitottság.</p>
            <p>A  képzést azoknak ajánljuk, akik a saját művészi útjuk megtalálása érdekében vállalkoznak a 100%-os intenzitású önálló és csoportos munkára.</p>
          </div>
        </Content>
      </section>
      <section id="entrance">
        <Content>
          <p>A felvételi több hónapos folyamat, melynek célja, hogy a jelentkező és az iskola képviselői egyértelmű bizonyosságra jussanak, hogy vállalkozni kívánnak az előttük álló több éves együttműködésre. A felvételt megelőző időszakban a jelentkező a lehető legalaposabban és legmélyebben megismeri az iskolát és önmagát is.
          Ebben segít a RÁFUTÁS 21/22 programunk, mely keretében Felvételi Előkészítő Kurzust, Nyitott Napokat, Hétvégi Workshopokat és Online Mentor Programot szervezünk.Maga a felvételi is kiváló alkalom, hogy ki-ki szembesüljön a várható örömökkel és nehézségekkel. A lehetőségek és kihívások ismeretében vághatunk felelősségteljesen a rendkívüli energiákat követelő felkészülésbe a hivatásos táncművész pályára. Azok számára, akik felvételt nyernek, az iskola Nyári Alkotóhetet szervez, melynek keretein belül a diákok megismerkedhetnek egymással és megalapozzuk a közös munka szeptemberi megkezdését.</p>
          <p>Az alkalmassági vizsga a gyakorlati vizsga része. A felvételi eljárás során a bizottság „megfelelt”, „nem felelt meg” minősítést adhat. A vizsga során egyetlen „nem felelt meg” minősítés is kizár a további felvételi eljárásból. A felvételi pontok számítása: felvételi eljárás alatt szerzett pontok figyelembevételével, hozott pontokat nem veszünk figyelembe.
          A Főiskola Felvételi szabályzatában olvashatók a részletesebb információk.</p>
          <p>Jelentkezni a Jelentkezési lap kitöltésével lehet.<br/>
          Az űrlap kitöltése előzetes előkészületeket igényel, ezért a kitöltést megelőzően kérünk, figyelmesen olvasd el a kitöltési útmutatót.</p>
          <h2 style={ { margin: '3.25rem 0', fontSize: '1.312rem', textTransform: 'uppercase', letterSpacing: '1px' } }>A <a>FELVI</a> jelentkezési határidő 2022 február 15.</h2>

          <p>A felvételin azt akarjuk megtudni, hogy a jelentkező
          mennyi gyakorlattal rendelkezik a hagyományos és újító technikák terén: kortárstánc, improvizáció, kreatív alkotómunka, balett és néptánc alapok
          tehetsége a táncművész pályára látható-e.
          testi, szellemi, lelki alkata alapján alkalmas-e a képzés elvégzésére és a táncművész pályára.
          képességei és szellemi orientációja alapján a BKTF által kínált pedagógiai úton eséllyel készülhet-e fel a táncművész pályára.</p>
 
          <p>A felvételi folyamat alatt egyidejű gyakorlati és alkalmassági vizsgát tartunk. 
          A gyakorlati vizsga a hagyományos és újító tánctechnikai ismeretekben való jártasságot méri fel. Az alkalmassági vizsga során annak megállapítására törekszünk, hogy a jelentkezők testi-lelki alkati sajátosságai, illetve egészsége megengedik-e a képzésben való részvételt. Egy objektív, átfogó összkép kialakításának reményében megpróbáljuk megismerni a jelentkezők motivációját és feltérképezni, milyen jellegű fogékonyság, valamint milyen lehetséges fejlődési útvonalak rajzolódnak ki a tánctechnikai fejlődés, a kreativitás, az előadói és alkotói gyakorlat területein. A folyamatot egy beszélgetés teszi teljessé, amely elsősorban a tánc, színház, zene, a vizuális művészetek területein való tájékozottságra, a kulturális, valamint a személyes érdeklődési területekre koncentrál. A felvételi teljes folyamata alatt mérjük fel az angol nyelvű kommunikációs készségeket.</p>
        </Content>
      </section>
    </main>
  )
};

export default Main;