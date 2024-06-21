

const Hero = () => {
    let marks=72;
    return (
        <div>
            <img src="https://www.rabbitholebd.com/_next/image?url=
            https%3A%2F%2Fdidbxtymavoia.cloudfront.net%2Fcms%2Fvideos%2F1713270588_260x372.jpg&w=750&q=75" />
            <h1>{4+8}</h1>
            <h1 style={{color:"red"}}>{new Date().getTime()}</h1>
            <p/>
            {(
                ()=>{
                    if (marks>=80 && marks<=100){
                        return<h1>A+</h1>
                    }
                    else if (marks>=70 && marks<=80){
                        return<h1>A</h1>
                    }
                    else if (marks>=60 && marks<=70){
                        return<h1>-A</h1>
                    }


                }

            )()}
        </div>
    );
};

export default Hero;