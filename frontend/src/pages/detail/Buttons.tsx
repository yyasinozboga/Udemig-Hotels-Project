import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteHotel } from "../../api";
import { Bounce, toast } from "react-toastify";

type Props = {
  id: string;
};

const Buttons = ({ id }: Props) => {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationKey: ["hotels"],
    mutationFn: () => deleteHotel(id),

    onSuccess: () => {
      toast.info("Konaklama noktası akıştan kaldırıldı", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      navigate("/");
    },

    onError: (err) => {
      console.log(err);
      toast.error("Üzgünüz bir sorun oluştu");
    },
  });

  return (
    <div className="flex justify-between">
      <Link
        to=".."
        className="flex justify-center items-center gap-1 border border-gray rounded-md py-1 h-[35px] w-[80px]"
      >
        <MdKeyboardArrowLeft size={23} />
        <p className="font-medium">Geri</p>
      </Link>

      <button
        onClick={() => mutate()}
        className="flex justify-center items-center gap-2 border border-gray rounded-md h-[35px] w-[80px]"
      >
        <FaRegTrashAlt size={15} />
        <p className="font-medium">Sil</p>
      </button>
    </div>
  );
};

export default Buttons;
