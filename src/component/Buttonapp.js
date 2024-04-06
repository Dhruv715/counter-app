function Buttonapp({onstamp,children}){
    function Fun(){
        onstamp();
    }
    return(
        <>
            <button type="submit" onClick={Fun}> {children} </button>

        </>
    );
}
export default Buttonapp;