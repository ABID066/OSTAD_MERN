
const status= true
const Hero = (props) => {
    return (
        <div>
            <img src="https://cdn.ostad.app/course/photo/2022-10-31T06-20-24.263Z-12.jpg"/>

            #Usig immediately invoked funciton
            <br/>
            {(()=> {
                if (status)
                    // eslint-disable-next-line react/prop-types
                    return <button onClick={props.childBtnClick}>lOGoUT FORM HERO</button>
                else
                    // eslint-disable-next-line react/prop-types
                    return <button onClick={props.childBtnClick}>lOGin to HERO</button>
            })()}

            <ul>
                {/* eslint-disable-next-line react/prop-types */}
                <li>Name: {props.items['name']}</li>
                {/* eslint-disable-next-line react/prop-types */}
                <li>Age:{props.items['age']}</li>
                {/* eslint-disable-next-line react/prop-types */}
                <li>City:{props.items['city']}</li>
            </ul>
        </div>

    );
};

export default Hero;