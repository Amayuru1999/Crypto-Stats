import { Button } from "@mui/material";
import React from "react";




const HomePage: React.FC = () => {
  

    const handleConnectCoinbase = () => {
        const url = process.env.REACT_APP_COINBASE_AUTH_URL;
        if (url) {
          console.log('Redirecting to:', url);
          window.location.href = url;
        } else {
          console.error('Coinbase auth URL is not defined');
        }
      };
      
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      
        <Button
          variant="contained"
          size="large"
          onClick={handleConnectCoinbase}
        >
          Connect Coinbase
        </Button>
      
    </div>
  );
};

export { HomePage };