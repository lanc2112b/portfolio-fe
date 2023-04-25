import toast from "react-hot-toast";
const Bread = ({ msgObj, t }) => {

    const handleDismiss = () => {
        toast.dismiss(t.id);
    };

    const styles = {};
    if (msgObj.type === 'success') {
        styles.toastStyle = 'shadow-green-900  bg-green-200';
        styles.hrStyle = 'border-green-400';
        styles.buttonStyle = 'bg-green-300 text-green-800 hover:text-green-100 hover:bg-green-700';
    } else if (msgObj.type === 'error') {
        styles.toastStyle = 'shadow-red-900  bg-red-200';
        styles.hrStyle = 'border-red-400';
        styles.buttonStyle = 'bg-red-300 text-red-800 hover:text-red-100 hover:bg-red-700';
    } else if (msgObj.type === 'warning'){
        styles.toastStyle = 'shadow-orange-900  bg-orange-200';
        styles.hrStyle = 'border-orange-400';
        styles.buttonStyle = 'bg-orange-300 text-orange-800 hover:text-orange-100 hover:bg-orange-700';
    } else {
        styles.toastStyle = 'shadow-cyan-900  bg-cyan-200';
        styles.hrStyle = 'border-cyan-400';
        styles.buttonStyle = 'bg-cyan-300 text-cyan-800 hover:text-cyan-100 hover:bg-cyan-700';
    }

    return (

        <>
            <div className={`w-96 p-4 shadow-md rounded-md bg-opacity-95 ${styles.toastStyle}`}>
                <h2 className="font-medium text-xl">{msgObj.title}</h2>
                <hr className={`${styles.hrStyle} my-3`}/>
                <p>{msgObj.msg}</p>
                <button className={`my-2 py-1 px-3 rounded-full font-semibold ${styles.buttonStyle} `} onClick={handleDismiss}>
                    Dismiss
                </button>
            </div>
        </>
    )
}

export default Bread;