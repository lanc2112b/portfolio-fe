const PortfolioCard = () => {
    return (
        <>
            <div className="break-inside-avoid-column mb-6 col-span-1 h-fit m-0 p-6 duration-300 shadow-sm rounded-md hover:bg-stone-50

                          hover:shadow-lg hover:scale-105 transition-all flex flex-col justify-between">
                <h2 className="text-xl bg-stone-200 py-1 px-3 rounded-t-md text-right">Card Title</h2>
                <hr className="border-stone-300 my-0.5" />
                <div className="flex flex-1 py-2 pt-0">
                    <img className="w-full" src="https://uideck.com/wp-content/uploads/edd/2022/02/crypto-tailwind-415x210.jpg" alt="something" />
                </div>
                <div className="p-1 bg-opacity-20 bg-stone-50">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, ipsa tempore fugit vel ullam sit in a, id modi quae, blanditiis dolores! Id eligendi natus dolor amet maiores temporibus libero!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, ipsa tempore fugit vel ullam sit in a, id modi quae, blanditiis dolores! Id eligendi natus dolor amet maiores temporibus libero!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, ipsa tempore fugit vel ullam sit in a, id modi quae, blanditiis dolores! Id eligendi natus dolor amet maiores temporibus libero!</p>
                </div>
                <hr className="border-stone-300 my-3" />
                <div className="flex justify-end w-full">
                    <button className="bg-stone-400 py-1 px-3 rounded-full font-semibold text-stone-50 hover:bg-stone-300">
                        Read More...
                    </button>
                </div>
            </div>
        </>
    );
}

export default PortfolioCard;