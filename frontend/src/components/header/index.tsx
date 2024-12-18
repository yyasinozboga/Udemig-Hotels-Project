import React from "react";
import { Link } from "react-router-dom";
import Button from "../button";

const Header = () => {
  return (
    <header className="p-5 flex justify-between items-center border border-b-gray-150">
      <div className="flex items-center gap-10">
        <h1 className="font-bold text-xl">Tripster</h1>
        <div className="flex items-center gap-3">
          <Link to="/" className="font-medium">
            Oteller
          </Link>
          <Link to="/create" className="font-medium">
            Oluştur
          </Link>
        </div>
      </div>

      <Button value="Giriş Yap" designs="rounded-full" />
    </header>
  );
};

export default Header;
