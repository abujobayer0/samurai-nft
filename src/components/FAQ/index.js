import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import styles from "./styles.module.css";
import { Title } from "../";
const AccordionItem = ({ header, no, ...rest }) => (
  <Item
    {...rest}
    header={
      <li className="md:text-[26px] text-sm lg:text-[32px]">
        <span className="pr-6">{no}</span>
        {header}
      </li>
    }
    className={styles.item}
    buttonProps={{
      className: ({ isEnter }) =>
        `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
    }}
    contentProps={{ className: styles.itemContent }}
    panelProps={{ className: styles.itemPanel }}
  />
);

export default function Faq() {
  return (
    <div className={"max-w-7xl px-5 lg:px-10  mx-auto mb-32"}>
      <Title size={"40px"} head={"Frequently Aske"} sub={"d Question"} />
      <div className="md:-mt-10">
        <Accordion transition transitionTimeout={200}>
          <AccordionItem no={"001"} header="What is 0xSamurai?">
            0xSamurai is a blockchain-based game that allows players to collect
            and battle with NFTs in a virtual arena. Players can earn rare NFTs
            and other rewards by winning battles and completing quests.
          </AccordionItem>

          <AccordionItem no={"002"} header="Is 0xSamurai secure?">
            Yes, 0xSamurai is built on the blockchain and utilizes smart
            contracts to ensure that transactions are secure and transparent.
            The platform has also undergone multiple security audits to ensure
            the safety of user funds and data.
          </AccordionItem>

          <AccordionItem no={"003"} header="What is RYO?">
            There are several ways to earn rewards in 0xSamurai, including
            winning battles, completing quests, staking RYO tokens, summoning
            Samurais. Rewards can include rare NFTs, gold, and other valuable
            items.
          </AccordionItem>
          <AccordionItem no={"004"} header="What is RYO?">
            Gold is an in-game currency that can be obtained by staking RYO
            tokens. It can be used to purchase various items and upgrades within
            the game.
          </AccordionItem>
          <AccordionItem no={"005"} header="How can I earn ?">
            There are several ways to earn rewards in 0xSamurai, including
            winning battles, completing quests, staking RYO tokens, summoning
            Samurais. Rewards can include rare NFTs, gold, and other valuable
            items.
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
