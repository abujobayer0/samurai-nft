import React from "react";
import { ClanTabs, TabContent } from "../";
import {
  DenkiImg,
  FireIcon,
  hagonImg,
  KazeImg,
  LeafIcon,
  MizuImg,
  PsyhicIcon,
  SkyIcon,
  TsuchiImg,
  WaterIcon,
} from "../../assets";
const NftSection = () => {
  return (
    <>
      <section className="max-w-7xl mb-20 mt-32 tab-navigation mx-auto px-5 sm:px-10">
        <h1 className="clash-700 mb-5 md:mb-[30px] lg:mb-[70px] leading-[78px] text-[30px] sm:text-[40px]  md:text-[45px] lg:text-[60px]">
          The <span className="bg-[#EC1C24] pr-8 lg:pr-12">Clans</span>
        </h1>
        <ClanTabs
          tabOne={
            <TabContent
              isFire
              title={"Hagon"}
              paragraph={
                "The Hagon Clan is known for its members' mastery of fire-based combat techniques. Fire is the primary skill of the Hagon Clan, and its members are trained to harness its power to devastating effect on the battlefield. Through intense training and dedication, the Hagon Clan has developed unique abilities that allow them to manipulate flames in a variety of ways. Their attacks can burn through armor and shields, leaving their opponents defenseless. The Hagon Clan also has a reputation for their unwavering loyalty to their allies and their fierce determination to protect their homeland. With their fiery skills and unyielding spirit, the members of the Hagon Clan are a force to be reckoned with."
              }
              icon={FireIcon}
              img={hagonImg}
            />
          }
          tabTwo={
            <TabContent
              isLeaf
              title={"Mizu"}
              paragraph={
                "the mizu clan stands out for their unique mastery of the leaf element. Led by the wise and elusive Sensei Miyagi, the members of the mizu clan move with the fluidity and grace of a leaf dancing in the wind. Their techniques are as versatile as the changing seasons, allowing them to adapt to any situation and overcome their opponents with ease. With their keen eyes and lightning-fast reflexes, the mizu clan is a force to be reckoned with in the battle arena. "
              }
              icon={LeafIcon}
              img={MizuImg}
            />
          }
          tabThree={
            <TabContent
              isPsyhic
              paragraph={
                "The members of the Kaze clan are known for their extraordinary psychic abilities, allowing them to manipulate their opponents' minds and predict their every move. With their sharp intuition and mental acuity, Kaze clan members are the ultimate mind readers and strategists on the battlefield. They can unleash a flurry of psychic attacks that can shatter their opponents' psyche and leave them confused and disoriented. No one can match the Kaze clan's mastery of the mind, making them one of the most feared and respected clans"
              }
              title={"Kaze"}
              icon={PsyhicIcon}
              img={KazeImg}
            />
          }
          tabFour={
            <TabContent
              isWater
              paragraph={
                "The Tsuchi clan is known for their mastery over the element of water. Members of this clan are born with an innate ability to manipulate water in all its forms - from a gentle trickle to a raging torrent. They can use this power to create powerful waves that can knock their opponents off their feet or to trap them in a watery prison. Tsuchi clan members are also skilled swimmers and can hold their breath underwater for extended periods, making them formidable opponents in aquatic battles. With their strong connection to water, the Tsuchi clan is a force to be reckoned with"
              }
              title={"Tsuchi"}
              icon={WaterIcon}
              img={TsuchiImg}
            />
          }
          tabFive={
            <TabContent
              isSky
              paragraph={
                "The Denki clan is a powerful group of warriors who specialize in harnessing the power of the sky and air to dominate their opponents. As the leaders of the skies, the members of the Denki clan are known for their lightning-fast reflexes and lightning-based attacks. They are able to command the very elements around them, summoning powerful gusts of wind and bolts of lightning to strike down their enemies. With their unparalleled control over the air and sky, the Denki clan is a force to be reckoned with in any battle."
              }
              title={"Denki"}
              icon={SkyIcon}
              img={DenkiImg}
            />
          }
        />
      </section>
    </>
  );
};

export default NftSection;
