import React, { useState } from 'react';
import '../../style/calculator.scss'




const SelectSecond = ({item, title}) => {

    const [selectedOption, setSelectedOption] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
  
    
      const selectItemFunc = (e) => {
        setSelectedOption(e);
        setIsOpen(false);

      }
    return (
        <>
        <h3>{title}</h3>
        <div className="custom-select">
            <div className="selected-option" onClick={() => setIsOpen(!isOpen)}>
                {selectedOption?.name || item[0]?.name}
            </div>
            {isOpen && (
                <div className="options">
                    {item.map((el,id) => (
                        <div className="option" key={id} onClick={() => selectItemFunc(el)}>
                            {el.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
        </>
    );
};

export default SelectSecond;