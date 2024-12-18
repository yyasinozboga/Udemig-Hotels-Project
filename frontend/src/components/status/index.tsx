import React from "react";
import { CgUnavailable } from "react-icons/cg";
import { MdEventAvailable } from "react-icons/md";

type Props = {
  status: boolean;
  designs: string;
  text?: boolean;
};

const Status = ({ status, designs, text }: Props) => {
  return (
    <div className={`${designs} ${status ? "bg-green-100" : "bg-red-100"}`}>
      {status ? (
        <>
          <MdEventAvailable color="green" size={20} />
          {text && (
            <span className="font-bold text-lg">Şuan Kullanılabilir</span>
          )}
        </>
      ) : (
        <>
          <CgUnavailable color="red" size={20} />
          {text && <span className="font-bold text-lg">Şuan Kullanılamaz</span>}
        </>
      )}
    </div>
  );
};

export default Status;
