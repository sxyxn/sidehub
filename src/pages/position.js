import React, { useState } from 'react';
import '../App.css';

const SelectBox = ({ options, defaultOption, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleChange = (event) => {
    const option = event.target.value;
    setSelectedOption(option);
    // onSelect(option);
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleChange}>
        <option value="">{defaultOption}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

const App = () => {
  const handlePositionSelect = (position) => {
    console.log('Selected position:', position);
    // 여기에 선택된 직군을 처리하는 로직 추가 가능
  };

  const handleTechSelect = (tech) => {
    console.log('Selected tech:', tech);
    // 여기에 선택된 기술을 처리하는 로직 추가 가능
  };

  const positions = ['프론트앤드', '백앤드', '디자이너', 'IOS', '안드로이드'];
  const techs = ['React', 'TypeScript', 'JavaScript', 'Vue', 'Nextjs', 'Nodejs', 'Java', 'Spring', 'Kotlin', 'Nestjs', 'Swift', 'Flutter', 'Figma'];

  return (
    <div className='position-container'>
      <SelectBox className = "selectBox" options={positions} defaultOption="포지션" onSelect={handlePositionSelect} />
      <SelectBox className = "selectBox" options={techs} defaultOption="기술" onSelect={handleTechSelect} />
    </div>
  );
};

export default App;