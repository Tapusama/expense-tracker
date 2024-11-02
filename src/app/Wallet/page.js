import React, { memo } from "react";
import "./wallet.css";
import CustomCards from "@/components/Customcards/CustomCards";
import Title from "@/components/Title/Title";

const Wallet = memo((props) => {
  return (
    <div className="bg-rgba(215, 226, 247, 0.48) flex flex-col container mx-auto py-10 gap-6">
      <div>
        <h3 className="text-xl font-semibold text-[#23347b]">Wallets</h3>
        <p className="text-sm py-2 text-[#8c8baf]">
          You can manage your wallet and all card details over here.
        </p>
      </div>
      <div className="flex flex-row container h-full">
        <div className="bankCardSectionWrapper">
          <CustomCards />
          <CustomCards />
          <CustomCards />
          <CustomCards />
        </div>
        <div className="bankCardDetailsWrapper">
          <Title />
        </div>
      </div>
    </div>
  );
});

export default Wallet;
