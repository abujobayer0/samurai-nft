import {
  binance,
  DenkiImg,
  dextools,
  FireIcon,
  googlePlay,
  hagonImg,
  KazeImg,
  LeafIcon,
  MizuImg,
  pinkSale,
  PsyhicIcon,
  SkyIcon,
  TsuchiImg,
  WaterIcon,
  yahooFinance,
} from "../assets";

const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "clans",
    title: "Clans",
  },
  {
    id: "currency",
    title: "Currency",
  },
  {
    id: "roadmap",
    title: "Roadmap",
  },
  {
    id: "faq",
    title: "Faq",
  },
];
const icons = [
  {
    icon: (
      <svg
        width="30"
        height="25"
        viewBox="0 0 30 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.0725 2.42822L24.7225 22.9733C24.4213 24.4314 23.5416 24.7808 22.3125 24.106L15.6851 19.2017L12.4798 22.2985C12.1183 22.66 11.8171 22.9733 11.1543 22.9733C10.2867 22.9733 10.4313 22.648 10.1421 21.8286L7.85264 14.3697L1.28544 12.3212C-0.13645 11.8994 -0.1485 10.9234 1.59874 10.2125L27.2168 0.331531C28.3857 -0.186615 29.5063 0.620729 29.0605 2.41617L29.0725 2.42822Z"
          fill="#FFF9EB"
        />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        width="32"
        height="25"
        viewBox="0 0 32 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.0002 24.6131C21.6991 24.6131 28.0964 15.2127 28.0964 7.06134C28.0964 6.79433 28.0908 6.52853 28.0784 6.26393C29.3203 5.39317 30.3997 4.30652 31.251 3.06953C30.1114 3.56083 28.885 3.89158 27.5985 4.04072C28.9117 3.277 29.9198 2.06887 30.3954 0.628616C29.1665 1.33521 27.8056 1.84877 26.3566 2.126C25.196 0.926891 23.5437 0.177002 21.714 0.177002C18.2017 0.177002 15.3534 2.93964 15.3534 6.34512C15.3534 6.82921 15.4092 7.30007 15.5183 7.75169C10.2322 7.49371 5.5449 5.03897 2.4083 1.30635C1.86207 2.21801 1.54711 3.27699 1.54711 4.40694C1.54711 6.54717 2.66994 8.43664 4.37743 9.54193C3.33396 9.51066 2.35373 9.23284 1.49689 8.77039C1.49595 8.79628 1.49595 8.82151 1.49595 8.84917C1.49595 11.8367 3.68829 14.3311 6.5986 14.8964C6.06416 15.0377 5.50181 15.1135 4.92148 15.1135C4.51228 15.1135 4.11361 15.0744 3.72611 15.0023C4.53584 17.4534 6.8838 19.237 9.66763 19.2869C7.49079 20.9419 4.7485 21.9275 1.76813 21.9275C1.25539 21.9275 0.748842 21.8992 0.250977 21.8421C3.0658 23.592 6.40793 24.6131 10.0002 24.6131Z"
          fill="#FFF9EB"
        />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        width="31"
        height="22"
        viewBox="0 0 31 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.7571 18.2355C14.2259 18.2355 14.6478 18.6105 14.6478 19.1261C14.6478 19.5949 14.2728 20.0168 13.7571 20.0168C13.2884 20.0168 12.8665 19.6418 12.8665 19.1261C12.8665 18.6105 13.2884 18.2355 13.7571 18.2355ZM27.5384 12.798C27.0696 12.798 26.6478 12.423 26.6478 11.9074C26.6478 11.4386 27.0228 11.0168 27.5384 11.0168C28.0071 11.0168 28.429 11.3918 28.429 11.9074C28.429 12.3761 28.0071 12.798 27.5384 12.798ZM27.5384 9.18865C26.0384 9.18865 24.8196 10.4074 24.8196 11.9074C24.8196 12.1886 24.8665 12.4699 24.9603 12.7511L16.0071 17.5324C15.4915 16.7824 14.6478 16.3605 13.7571 16.3605C12.7259 16.3605 11.7884 16.9699 11.3196 17.8605L3.25715 13.6418C2.4134 13.173 1.75715 11.8136 1.8509 10.5011C1.89777 9.8449 2.13215 9.32927 2.46027 9.14177C2.69465 9.00115 2.92902 9.04802 3.25715 9.18865L3.30402 9.23552C5.46027 10.3605 12.4446 14.0168 12.7259 14.1574C13.1946 14.3449 13.429 14.4386 14.2259 14.0636L28.6634 6.56365C28.8978 6.4699 29.1321 6.2824 29.1321 5.95427C29.1321 5.5324 28.7103 5.3449 28.7103 5.3449C27.8665 4.9699 26.6009 4.36052 25.3821 3.79802C22.7571 2.57927 19.7571 1.17302 18.4446 0.469898C17.3196 -0.139477 16.3821 0.376148 16.2415 0.469898L15.9134 0.610523C9.96027 3.61052 2.08527 7.50115 1.61652 7.7824C0.819646 8.25115 0.304021 9.23552 0.257146 10.4543C0.163396 12.3761 1.14777 14.3918 2.55402 15.0949L11.0853 19.5011C11.2728 20.8136 12.4446 21.8449 13.7571 21.8449C15.2571 21.8449 16.429 20.673 16.4759 19.173L25.8509 14.1105C26.3196 14.4855 26.929 14.673 27.5384 14.673C29.0384 14.673 30.2571 13.4543 30.2571 11.9543C30.2571 10.4074 29.0384 9.18865 27.5384 9.18865Z"
          fill="#FFF9EB"
        />
      </svg>
    ),
  },
];
const sponsers = [yahooFinance, googlePlay, binance, dextools, pinkSale];
const tabsDetail = [
  {
    title: "Hagon",
    condition: "isFire",
    paragraph:
      "The Hagon Clan is known for its members' mastery of fire-based combat techniques. Fire is the primary skill of the Hagon Clan, and its members are trained to harness its power to devastating effect on the battlefield. Through intense training and dedication, the Hagon Clan has developed unique abilities that allow them to manipulate flames in a variety of ways. Their attacks can burn through armor and shields, leaving their opponents defenseless. The Hagon Clan also has a reputation for their unwavering loyalty to their allies and their fierce determination to protect their homeland. With their fiery skills and unyielding spirit, the members of the Hagon Clan are a force to be reckoned with.",
    icon: FireIcon,
    img: hagonImg,
    btn: "fire",
  },
  {
    title: "Mizu",
    condition: "isLeaf",
    paragraph:
      "the mizu clan stands out for their unique mastery of the leaf element. Led by the wise and elusive Sensei Miyagi, the members of the mizu clan move with the fluidity and grace of a leaf dancing in the wind. Their techniques are as versatile as the changing seasons, allowing them to adapt to any situation and overcome their opponents with ease. With their keen eyes and lightning-fast reflexes, the mizu clan is a force to be reckoned with in the battle arena. ",
    icon: LeafIcon,
    img: MizuImg,
    btn: "leaf",
  },
  {
    title: "Kaze",
    condition: "isPsyhic",
    paragraph:
      "The members of the Kaze clan are known for their extraordinary psychic abilities, allowing them to manipulate their opponents' minds and predict their every move. With their sharp intuition and mental acuity, Kaze clan members are the ultimate mind readers and strategists on the battlefield. They can unleash a flurry of psychic attacks that can shatter their opponents' psyche and leave them confused and disoriented. No one can match the Kaze clan's mastery of the mind, making them one of the most feared and respected clans",
    icon: PsyhicIcon,
    img: KazeImg,
    btn: "psyhic",
  },
  {
    title: "Tsuchi",
    condition: "isWater",
    paragraph:
      "The Tsuchi clan is known for their mastery over the element of water. Members of this clan are born with an innate ability to manipulate water in all its forms - from a gentle trickle to a raging torrent. They can use this power to create powerful waves that can knock their opponents off their feet or to trap them in a watery prison. Tsuchi clan members are also skilled swimmers and can hold their breath underwater for extended periods, making them formidable opponents in aquatic battles. With their strong connection to water, the Tsuchi clan is a force to be reckoned with",
    icon: WaterIcon,
    img: TsuchiImg,
    btn: "water",
  },
  {
    title: "Denki",
    condition: "isSky",
    paragraph:
      "The Denki clan is a powerful group of warriors who specialize in harnessing the power of the sky and air to dominate their opponents. As the leaders of the skies, the members of the Denki clan are known for their lightning-fast reflexes and lightning-based attacks. They are able to command the very elements around them, summoning powerful gusts of wind and bolts of lightning to strike down their enemies. With their unparalleled control over the air and sky, the Denki clan is a force to be reckoned with in any battle.",
    icon: SkyIcon,
    img: DenkiImg,
    btn: "sky",
  },
];
export { icons, tabsDetail, navLinks, sponsers };
