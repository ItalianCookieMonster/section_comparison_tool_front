const Footer = () => {
    return (
        <footer className="grid grid-cols-2 bg-foreground text-background text-sm p-5 gap-10 min-h-[30vh] items-strech">
            <div className="border-r-background border-r-2 justify-self-end w-[50%] p-4">
                <h6 className="font-bold  mb-8">Disclaimer</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="justify-self-start w-[50%] p-4">
                <h6 className="font-bold mb-8">Contact</h6>
                <p>123-456-7890</p>
                <p>9tQ2H@example.com</p>
                <p>1617 Ocean Ave.</p>
                <p>San Diego, CA 92101</p>

                <p className="mt-10">© 2022. All rights reserved.</p>
            </div>

        </footer>
    )
}
export default Footer