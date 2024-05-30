import React, { useState } from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

export default function ExperienceandQualifications() {
  let navigate = useNavigate(); 

  const [ages, setAges] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [experienceWorkingWith, setExperienceWorkingWith] = useState('');

  const handleAgeSelection = (selectedAges) => {
    setAges(selectedAges);
  };

  const handleCertificationsSelection = (selectedCertifications) => {
    setCertifications(selectedCertifications);
  };

  const handleExperienceWorkingWithChange = (event) => {
    setExperienceWorkingWith(event.target.value);
  };

  return (
    <div>
      <p style={{ marginLeft: '50px' }}>Step 2 of 2</p>
      <h1 style={{ marginLeft: '50px' }}>Your Experience and Qualifications</h1>
      <p style={{ marginLeft: '50px' }}>Share a few details about the working experience and qualifications you have</p>
      <h4 style={{ marginLeft: '50px' }}>Ages you have experience with?</h4>
      <ToggleButtonGroup type="checkbox" value={ages} onChange={handleAgeSelection} style={{ marginLeft: '70px' }}>
        <ToggleButton
          value={'40-50'}
          style={{
            marginLeft: '20px',
            marginRight: '20px',
            backgroundColor: ages.includes('40-50') ? 'gray' : 'lightgray',
            color: 'black'
          }}
        >
          40-50
        </ToggleButton>
        <ToggleButton
          value={'50-60'}
          style={{
            marginLeft: '20px',
            marginRight: '20px',
            backgroundColor: ages.includes('50-60') ? 'gray' : 'lightgray',
            color: 'black'
          }}
        >
          50-60
        </ToggleButton>
        <ToggleButton
          value={'60-70'}
          style={{
            marginLeft: '20px',
            marginRight: '20px',
            backgroundColor: ages.includes('60-70') ? 'gray' : 'lightgray',
            color: 'black'
          }}
        >
          60-70
        </ToggleButton>
        <ToggleButton
          value={'70-80'}
          style={{
            marginLeft: '20px',
            marginRight: '20px',
            backgroundColor: ages.includes('70-80') ? 'gray' : 'lightgray',
            color: 'black'
          }}
        >
          70-80
        </ToggleButton>
      </ToggleButtonGroup>
      <br></br><br></br>
      <Row style={{ marginLeft: '35px', marginRight: '35px' }} className="mb-3">
        <Col xs={4}>
          <h4>Years of professional work experience</h4>
          <p>Experience working at a care center or hospital</p>
          <input type="text" style={{ width: '350px', height: '50px'}} />
          <br/><br/>
        </Col>
        <Col xs={4}>
          <h4>Years of work experience</h4>
          <p>Experience providing at-home care independently</p>
          <input type="text" style={{ width: '350px', height: '50px'}} />
        </Col>
        <Col xs={4}>
          <h4>Experience working with:</h4>
          <p>If you have experience working with differently-abled elderly,<br/> dementia patients, list as such:</p>
          <select value={experienceWorkingWith} onChange={handleExperienceWorkingWithChange}>
            <option value="">Type</option>
            <option value="differentlyAbled">Differently abled elderly</option>
            <option value="dementiaElderly">Dementia elderly</option>
            <option value="deafElderly">Deaf elderly</option>
          </select>
          <input type="text" placeholder="Other" style={{ width: '200px', height: '25px', textAlign:'center', marginTop:"0px" , float:'right'}} />
        </Col>
      </Row>
      <div style={{ marginLeft: '50px' }}>
        <h4>What are the qualifications or certifications you have?</h4>
        <ToggleButtonGroup type="checkbox" value={certifications} onChange={handleCertificationsSelection}>
          <ToggleButton
            value={'FirstAid'}
            style={{
              marginLeft: '20px',
              marginRight: '20px',
              backgroundColor: certifications.includes('FirstAid') ? 'gray' : 'lightgray',
              color: 'black'
            }}
          >
            First and Emergency Care
          </ToggleButton>
          <ToggleButton
            value={'HHA'}
            style={{
              marginLeft: '20px',
              marginRight: '20px',
              backgroundColor: certifications.includes('HHA') ? 'gray' : 'lightgray',
              color: 'black'
            }}
          >
            HHA Training (Home Health Aide)
          </ToggleButton>
          <ToggleButton
            value={'CNA'}
            style={{
              marginLeft: '20px',
              marginRight: '20px',
              backgroundColor: certifications.includes('CNA') ? 'gray' : 'lightgray',
              color: 'black'
            }}
          >
            CNA Training (Certified Nursing Assistant)
          </ToggleButton>
          <ToggleButton
            value={'DementiaCare'}
            style={{
              marginLeft: '20px',
              marginRight: '20px',
              backgroundColor: certifications.includes('DementiaCare') ? 'gray' : 'lightgray',
              color: 'black'
            }}
          >
            Dementia Care Certification
          </ToggleButton>
          <ToggleButton
            value={'NoCertificationsQualifications'}
            style={{
              marginLeft: '20px',
              marginRight: '20px',
              backgroundColor: certifications.includes('NoCertificationsQualifications') ? 'gray' : 'lightgray',
              color: 'black'
            }}
          >
            No Certifications or Qualifications
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <h4 style={{ textAlign:'center' }}>Do you have any vehicles?</h4>
      <div style={{ display: 'flex', marginTop: '20px'}}>
        <Button variant="primary" style={{ width: '100px', marginLeft: '600px' }}>Yes</Button>
        <Button variant="primary" style={{ width: '100px', marginLeft: '80px' }}>No</Button>
      </div>
      <br></br>
      <Button variant="primary" style={{ width: '100px', marginLeft: '700px'}} onClick={() => {
                navigate(`/Personality1`)
              }}>Next</Button>
    </div>
  );
}
