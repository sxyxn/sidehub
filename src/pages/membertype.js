//팀원 모집 페이지에 들어가는 셀렉트 박스 기능

import React, { useState } from 'react';
import '../App.css';

const SelectBox = ({ options, defaultOption, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleChange = (event) => {
    const option = event.target.value;
    setSelectedOption(option);
    onSelect(option);
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
  const handleFormSelect = (form) => {
    console.log('Selected form:', form);
    // 여기에 선택된 모집 형태를 처리하는 로직 추가 가능
  };

  const handleTechSelect = (tech) => {
    console.log('Selected tech:', tech);
    // 여기에 선택된 기술을 처리하는 로직 추가 가능
  };

  const handleNumOfRecruitsSelect = (num) => {
    console.log('Selected number of recruits:', num);
    // 여기에 선택된 모집 인원을 처리하는 로직 추가 가능
  };

  const handleDurationSelect = (duration) => {
    console.log('Selected duration:', duration);
    // 여기에 선택된 진행 기간을 처리하는 로직 추가 가능
  };

  const handleDeadlineSelect = (event) => {
    const selectedDate = event.target.value;
    console.log('Selected deadline:', selectedDate);
    // 여기에 선택된 모집 마감일을 처리하는 로직 추가 가능
  };

  const recruitForms = ['프론트앤드', '백앤드', '디자이너', 'IOS', '안드로이드'];
  const techs = ['React', 'TypeScript', 'JavaScript', 'Vue', 'Nextjs', 'Nodejs', 'Java', 'Spring', 'Kotlin', 'Nestjs', 'Swift', 'Flutter', 'Figma'];
  const numOfRecruits = ['1명', '2명', '3명', '4명', '5명', '6명', '7명', '8명', '9명', '10명 이상'];
  const durations = ['1개월', '2개월', '3개월', '4개월', '5개월', '6개월', '장기(6개월 이상)'];

  return (
    <div className='position-container'>
      <SelectBox options={recruitForms} defaultOption="모집형태" onSelect={handleFormSelect} />
      <SelectBox options={techs} defaultOption="기술" onSelect={handleTechSelect} />
      <SelectBox options={numOfRecruits} defaultOption="모집인원" onSelect={handleNumOfRecruitsSelect} />
      <SelectBox options={durations} defaultOption="진행기간" onSelect={handleDurationSelect} />
      <div>
        <label>모집 마감일:</label>
        <input type="date" onChange={handleDeadlineSelect} />
      </div>
    </div>
  );
};

export default App;
