import ReactDOM from "react-dom";
import { AiTwotoneDelete } from "react-icons/ai";
import IconButton from "../buttons/IconButton";
import { IoClose } from "react-icons/io5";
import React, { useRef } from "react";
import toast from "react-hot-toast";
import { useDeleteVideoMutation , util } from "@/store/Reducers/videoApiSlice";
import { IVideo } from "@/utils/types/types";
import { Squircle } from "corner-smoothing";
import { useTranslation } from "react-i18next";
interface DeleteVideoParams {
  videoToBeDeleted?:IVideo | undefined;
  setVideoToBeDeleted:React.Dispatch<React.SetStateAction<IVideo|undefined>>
}
function DeleteVideoPortal({videoToBeDeleted,setVideoToBeDeleted}:DeleteVideoParams) {
  const [t] = useTranslation()
  const [deleteVideoMutation,{isLoading}] = useDeleteVideoMutation();
  let popUpsRef = useRef<HTMLDivElement | null>(null)
  const portalElement = document.getElementById("portals");
  if (!portalElement) {
    return null; 
  }
  const handleClosePopUp = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if(!popUpsRef.current?.contains(e.target as Node)){ 
      setVideoToBeDeleted(undefined);
    }
  }
  const handleVideoDeletion = async( )=> {
    try {
      const response = await deleteVideoMutation({videoId:videoToBeDeleted?._id}).unwrap();console.log("response >>",response)
      toast.success(response.message)
      util.invalidateTags(["Videos"])
    } catch (error:any) {}
  }
  return ReactDOM.createPortal(
   <>
      {videoToBeDeleted&&<div onClick={handleClosePopUp} className="absolute bg-[#00000057] z-[100] grid w-[100vw] h-[100vh] ">
       <div className="place-self-center " ref={popUpsRef}>
         <Squircle cornerRadius={16} className="bg-[#242424] text-white flex flex-col p-[10%] rounded montserrat w-fit">
            <div onClick={()=>setVideoToBeDeleted(undefined)} className="flex ">
              <IoClose  />
            </div>
           <h1 className="text-nowrap font-semibold my-[5%] " >{t("deleteAlert")}</h1>
           <div className="flex cp-6 justify-end  ">
            <IconButton onClick={handleVideoDeletion} disabled={isLoading ? true : false}  className="bg-red-500 mt-[3%]" direction="left" text={t("delete")} >
              <AiTwotoneDelete />
            </IconButton>
          </div>
         </Squircle>
       </div>
      </div>}
   </>
    ,
    portalElement
  );
}

export default DeleteVideoPortal;
