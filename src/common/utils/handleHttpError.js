export const HandleHtttpError=(error)=>{
    const errorData={message:'',data:{}};
    if(error)
    {
        errorData.message="something went wrong";
    }
    return errorData;
}