import React, {useState} from 'react';

function Calculator() {
    const [result , setresult] = useState('');
    const clickHandle = (e)=>{
        setresult(result.concat(e.target.value));
    }
    const clearScreen= (e)=>{
        setresult("");
    }
    const calculate =() =>{
        setresult(eval(result).toString());
    }
    const deleteLastCharacter = () => {
        setresult(result.slice(0, -1));
    };
    return (
        <div className="bg-white text-blue-800 w-screen h-screen flex justify-center items-center">
            <div className="w-64 h-auto bg-white rounded-2xl shadow-xl border-4 border-blue-200">
                <div className="screen p-2">
                    <input type="text"
                    value={result}
                        className='shadow-md text-blue-800 px-1 text-right placeholder-blue-400 outline-none rounded-lg bg-blue-100 text-2xl pt-5 w-full'
                        placeholder='0'
                    />
                </div>
                <div className="brand flex justify-center mb-2 shadow-md text-blue-500 bg-blue-200">
                    <h1 className='text-blue-900 text-xs font-bold'>Make your work easy</h1>
                </div>
                <div className="keyboard">
                    <div className="m-2 flex justify-between">
                        <input type="button"
                        onClick={clearScreen}  value="C" className="bg-red-300 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                        <input type="button" onClick={deleteLastCharacter}value="del" className="bg-blue-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                        <input type="button" onClick={clickHandle}value="%" className="bg-blue-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                        <input type="button" onClick={clickHandle}value="/" className="bg-pink-300 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                    </div>
                    <div className="m-2 flex justify-between">
                        <input type="button" onClick={clickHandle} value="7" className="bg-blue-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                        <input type="button" onClick={clickHandle}value="8" className="bg-blue-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                        <input type="button" onClick={clickHandle}value="9" className="bg-blue-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                        <input type="button" onClick={clickHandle}value="*" className="bg-green-300 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                    </div>
                    <div className="m-2 flex justify-between">
                        <input type="button" onClick={clickHandle}value="4" className="bg-blue-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                        <input type="button" onClick={clickHandle}value="5" className="bg-blue-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                        <input type="button" onClick={clickHandle}value="6" className="bg-blue-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                        <input type="button" onClick={clickHandle}value="-" className="bg-indigo-300 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                    </div>
                    <div className="m-2 flex justify-between">
                        <input type="button" onClick={clickHandle}value="1" className="bg-blue-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                        <input type="button" onClick={clickHandle}value="2" className="bg-blue-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                        <input type="button" onClick={clickHandle}value="3" className="bg-blue-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                        <input type="button" onClick={clickHandle}value="+" className="bg-purple-300 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                    </div>
                    <div className="m-2 flex justify-between">
                        <input type="button" value="0" onClick={clickHandle}className="bg-blue-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                        <input type="button" value="00" onClick={clickHandle}className="bg-blue-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                        <input type="button" onClick={clickHandle}value="." className="bg-blue-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none"  />
                        <input type="button" onClick={calculate} value="=" className="bg-orange-300 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
