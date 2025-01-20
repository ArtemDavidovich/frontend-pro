

function MyInput({name, type, label}) {   
    return(        
            <div className="labelHmwrk03">
                <label htmlFor={name}>{label}</label>
                <input className="inputHmwrk03" id={name} type={type} placeholder={`  Enter your ${name}:`} required />
            </div>                    
    );
};

export default MyInput;