import React, { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import { shortenAddress } from "../../utils/shortenAddress";
import useFetch from "../../hooks/useFetch";
import { BsArrowBarDown } from "react-icons/bs";
import "./transactions.css";

function TransactionsCard({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
  url,
}) {
  const gifUrl = useFetch({ keyword });

  return (
    <div className="rockitcoins__transactions__transactionscard">
      <div className="rockitcoins__transactions__transactionscard__container">
        <div className="rockitcoins__transactions__transactionscard__address">
          <a
            href={`https://ropsten.etherscan.io/address/${addressFrom}`}
            target="_blank"
            rel="noreferrer"
          >
            <p>
              <b>From: </b>
              {shortenAddress(addressFrom)}
            </p>
          </a>
          <a
            href={`https://ropsten.etherscan.io/address/${addressTo}`}
            target="_blank"
            rel="noreferrer"
          >
            <p>
              <b>To: </b>
              {shortenAddress(addressTo)}
            </p>
          </a>

          <p>
            <b>Amount: </b>
            {amount} ETH
          </p>
          {message && (
            <>
              <p>
                <b>Message: </b>
                {message}
              </p>
            </>
          )}
        </div>

        <img src={gifUrl || url} alt="gif" />

        <div className="rockitcoins__transactions__transactionscard__timestamp">
          <p>{timestamp}</p>
        </div>
      </div>
    </div>
  );
}

export default function Transactions() {
  const { currentAccount, transactions } = useContext(TransactionContext);
  return (
    <div
      className="rockitcoins__transactions section__padding"
      id="transactions"
    >
      <div className="rockitcoins__transactions__heading">
        {currentAccount ? (
          <h1 className="gradient__text">Recent Transactions</h1>
        ) : (
          <h1 className="gradient__text">
            Connect with MetaMask <br /> to see your recent <br /> Transactions
          </h1>
        )}
        <p>Officia cillum ea quis commodo.</p>
        <span>
          <BsArrowBarDown />
        </span>
      </div>

      <div className="rockitcoins__transactions__container">
        <div className="rockitcoins__transactions__container__transaction">
          <div className="rockitcoins__transaction__container__transaction__card">
            {[
              transactions
                .reverse()
                .map((transaction, i) => (
                  <TransactionsCard key={i} {...transaction} />
                )),
            ]}
          </div>
        </div>
      </div>
    </div>
  );
}
