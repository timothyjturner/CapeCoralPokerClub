import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import EventsFeed from "../components/events/events-feed";

import Header from "../components/header";

export default function Rules() {
  return (
    <Layout preview="unecessary">
      <Head>
        <title>{`Cape Coral Poker Club`}</title>
      </Head>
      <Header activeLink="Rules" />
      <div className="w-[800px] p-8 mx-auto flex flex-col gap-8 standard-container">
        <h1 className="text-4xl font-bold my-8 text-center">Rules</h1>
        <p>
          <strong>BUYIN: </strong>$25 (tournament) and $5 min. / $50 max. cash
          game&nbsp;
        </p>

        <p>
          <strong>REBUYS: </strong>$25 – 2 max. per player during rebuy period
          only (tournament only)&nbsp; – A rebuy is only allowed if the player
          is entirely out of chips.
        </p>

        <p>
          <strong>CARD VISIBILITY: </strong>Players have to keep their cards in
          view at all times.&nbsp;&nbsp;
        </p>

        <p>
          <strong>DISCUSSING HANDS: </strong>Players are not allowed to discuss
          hands while the hand is in play.&nbsp;&nbsp;
        </p>

        <p>
          <strong>STRING BET: </strong>No string bets allowed. When raising, a
          player must either put the amount of the raise out in one motion or
          state the raise amount. If the raise is unannounced then the raise
          must be made in one motion. If the raise is announced but no amount is
          announced – I raise – then the amount of the raise must be in one
          motion. If both the raise and the amount are announced – I raise 600 –
          then the player can make several motions to put chips into the pot
          since there is no question about the details.&nbsp;&nbsp;
        </p>

        <p>
          <strong>TABLE STAKES: </strong>Only the amount of chips the player has
          at the start of a hand is the amount available to wager – a player may
          not dip into his pocket for additional money in the middle of the
          hand. A player can’t put cash into the pot – only chips.&nbsp;&nbsp;
        </p>

        <p>
          <strong>UNPROTECTED HANDS: </strong>If a dealer kills an unprotected
          hand, the player cannot do anything about it because it is his
          responsibility to protect his cards. An exception would be if a player
          raised and his raise had not been called yet, he would be entitled to
          receive his raise back.&nbsp;&nbsp;
        </p>

        <p>
          <strong>ENGLISH ONLY: </strong>Only English may be spoken at the
          table.&nbsp;&nbsp;
        </p>

        <p>
          <strong>NUMBER OF RAISES: </strong>In limit poker, there is a limit to
          3 raises – even heads up. There is no limit to the number of raises in
          no-limit and pot limit poker.&nbsp;
        </p>

        <p>
          <strong>SITTING OUT: </strong>In a tournament, a player has the right
          to sit out as long as he wants as long as he posts his blinds. In a
          limit game, a player may sit out but needs to post a dead blind when
          sitting back in.&nbsp;&nbsp;
        </p>

        <p>
          <strong>VERBAL DECLARATIONS: </strong>If a player verbally announces a
          move then he will be required to play according to his verbal
          declarations – even if he has not moved his chips.&nbsp;&nbsp;
        </p>

        <p>
          <strong>SHOWING HANDS – WHEN ALL-IN: </strong>When a player is all-in,
          he has to show his cards.&nbsp;&nbsp;
        </p>

        <p>
          <strong>SHOWING HANDS – JUST SHOWING ONE: </strong>A player is allowed
          to show only one card to take down the pot. For example, if the board
          is JJ882, then he would show a J to indicate he had the nut full
          house, assuming it is good enough to win the pot.&nbsp;&nbsp;
        </p>

        <p>
          <strong>KILLING HANDS OF ABSENT PLAYERS: </strong>A player must be at
          the table at the end of the showdown in order to have his hand live.
          If he is not AT the table when the last card is dealt to the button,
          the dealer will kill his hand. If the dealer does not kill the hand,
          it will still be considered dead. If he is the blind, his bet will be
          posted and his hand dead.&nbsp;&nbsp;
        </p>

        <p>
          <strong>RABBIT HUNTING: </strong>In tournaments, rabbit hunting is not
          allowed, to preserve the clock. In cash games, it is up to the dealer.
        </p>

        <p>
          <strong>MINIMUM RAISE: </strong>The minimum amount of a raise must be
          the amount of the previous raise, not the amount of the previous bet.
          If the blinds are 100 and 200 and the opener raises to 600. If the
          next player wants to raise, then the minimum raise is now TO 1,000.
          Because the previous raise was 400. The minimum re-raise must now be
          400.&nbsp;&nbsp;
        </p>

        <p>
          <strong>SIDE POTS: </strong>A player can only win from each player as
          many chips as he bets. This is called a main pot. A side pot is
          created with any subsequent bets.&nbsp;&nbsp;
        </p>

        <p>
          <strong>DRAWING SEATS: </strong>For tournaments, seat numbers will be
          drawn by the tournament director. For cash games, initial seats will
          be determined by drawing cards.&nbsp;
        </p>

        <p>
          <strong>ARRIVING LATE: </strong>Late arrivals to tournaments will be
          allowed to buy in, provided the rebuy period hasn’t passed and there
          is a seat available.&nbsp;
        </p>

        <p>
          <strong>DRAWING FOR THE BUTTON: </strong>In tournaments, seat 1, as
          determined by the Tournament Director software, will be the
          button.&nbsp;&nbsp;
        </p>

        <p>
          <strong>TOURNAMENTS TIES: </strong>If two players (or more) are
          in-the-money in a tournament and they go all-in and both get knocked
          out then the player with the most chips will place higher than the
          player with fewer chips. If they both have an equal number of chips
          and both get knocked out then they will finish in a tie.&nbsp;&nbsp;
        </p>

        <p>
          <strong>BET SIZES: </strong>In limit games an oversized chip will be
          deemed to be a call if the player does not announce a raise. In
          no-limit an oversized chip before the flop is a call and after the
          flop an oversized chip by the initial bettor put in the pot will
          constitute the size of the bet.&nbsp;&nbsp;
        </p>

        <p>
          <strong>ETIQUETTE:&nbsp;</strong>
        </p>

        <ul>
          <li>Please do not talk on your cell phone during a hand.&nbsp;</li>

          <li>Please do not splash the pot.&nbsp;</li>

          <li>Do not act out of turn.&nbsp;</li>

          <li>Please pay attention to the hand if you are in it.&nbsp;</li>

          <li>
            Do not turn over another player’s mucked cards without his
            permission.&nbsp;
          </li>

          <li>
            No smoking inside, including inside the pool lanai area. Please
            smoke outside.&nbsp;
          </li>

          <li>
            Please no food on the nice poker table, use a side table to place
            food.&nbsp;
          </li>

          <li>
            It’s assumed that you know in advance the standard rules of the game
            we are playing. The host has the right to make final ruling over any
            controversies.
          </li>
        </ul>
      </div>
    </Layout>
  );
}

// export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
//   const allPosts = await getAllPostsForHome(preview);

//   return {
//     props: { allPosts, preview },
//     revalidate: 10,
//   };
// };
