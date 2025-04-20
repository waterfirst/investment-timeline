import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';

const InvestmentTimeline = () => {
  const [activeTab, setActiveTab] = useState('timeline');

  // 투자 단계별 타임라인 데이터
  const timelineData = [
    { name: '4월 말', 개인연금누적: 33, 퇴직연금누적: 33, 개인연금투자: 33, 퇴직연금투자: 33, 단계: '1단계: 초기 투자', 이벤트: '이재명 정부 출범 준비기' },
    { name: '5월', 개인연금누적: 37, 퇴직연금누적: 37, 개인연금투자: 4, 퇴직연금투자: 4, 단계: '적립식 투자 시작', 이벤트: '정부 출범 초기 정책 발표' },
    { name: '6월', 개인연금누적: 45, 퇴직연금누적: 45, 개인연금투자: 8, 퇴직연금투자: 8, 단계: '적립식 투자', 이벤트: '초기 정책 시행' },
    { name: '7월', 개인연금누적: 53, 퇴직연금누적: 53, 개인연금투자: 8, 퇴직연금투자: 8, 단계: '적립식 투자', 이벤트: '남북관계 변화 모니터링' },
    { name: '8월', 개인연금누적: 61, 퇴직연금누적: 61, 개인연금투자: 8, 퇴직연금투자: 8, 단계: '적립식 투자', 이벤트: '경제 정책 효과 분석' },
    { name: '9월', 개인연금누적: 69, 퇴직연금누적: 69, 개인연금투자: 8, 퇴직연금투자: 8, 단계: '2단계: 본격화', 이벤트: '정책 효과 본격화 시점' },
    { name: '10월', 개인연금누적: 77, 퇴직연금누적: 77, 개인연금투자: 8, 퇴직연금투자: 8, 단계: '적립식 투자', 이벤트: '미국 대선 임박' },
    { name: '11월', 개인연금누적: 85, 퇴직연금누적: 85, 개인연금투자: 8, 퇴직연금투자: 8, 단계: '적립식 투자', 이벤트: '미국 대선 결과 확정' },
    { name: '12월', 개인연금누적: 93, 퇴직연금누적: 93, 개인연금투자: 8, 퇴직연금투자: 8, 단계: '적립식 투자', 이벤트: '트럼프 정책 기조 예측' },
    { name: '내년 1월', 개인연금누적: 100, 퇴직연금누적: 100, 개인연금투자: 7, 퇴직연금투자: 7, 단계: '3단계: 완료', 이벤트: '트럼프 취임, 투자 완료' },
    { name: '내년 11월', 개인연금누적: 100, 퇴직연금누적: 100, 개인연금투자: 0, 퇴직연금투자: 0, 단계: '모니터링', 이벤트: '미국 중간선거 (상원 35석, 하원 전체 선출)' }

  ];

  // 포트폴리오 구성 데이터 - 개인연금
  const personalPensionData = [
    { name: '1단계 (4월 말)', 'TIGER 미국S&P500': 30, 'TIGER 국고채30년': 25, 'ACE KRX금현물': 15, 'TIGER 구리실물': 10, 'ACE 국고채3년': 20 },
    { name: '2단계 (9월)', 'TIGER 미국S&P500': 30, 'TIGER 국고채30년': 25, 'ACE KRX금현물': 15, 'TIGER 구리실물': 15, 'ACE 국고채3년': 15 },
    { name: '3단계 (내년 1월)', 'TIGER 미국S&P500': 35, 'TIGER 국고채30년': 25, 'ACE KRX금현물': 15, 'TIGER 구리실물': 15, 'ACE 국고채3년': 10 }
  ];

  // 포트폴리오 구성 데이터 - 퇴직연금
  const retirementPensionData = [
    { name: '1단계 (4월 말)', 'TIGER 미국S&P500': 25, 'TIGER 국고채30년': 30, 'ACE KRX금현물': 10, 'KODEX 선진국MSCI': 15, 'ACE 국고채10년': 10, 'TIGER 인도니프티50': 5, 'ACE 국고채3년': 5 },
    { name: '2단계 (9월)', 'TIGER 미국S&P500': 25, 'TIGER 국고채30년': 30, 'ACE KRX금현물': 15, 'KODEX 선진국MSCI': 15, 'ACE 국고채10년': 5, 'TIGER 인도니프티50': 5, 'ACE 국고채3년': 5 },
    { name: '3단계 (내년 1월)', 'TIGER 미국S&P500': 30, 'TIGER 국고채30년': 30, 'ACE KRX금현물': 10, 'KODEX 선진국MSCI': 15, 'ACE 국고채10년': 5, 'TIGER 인도니프티50': 5, 'ACE 국고채3년': 5 }
  ];

  // 투자 시점 체크리스트 데이터
  const checklistItems = [
    { id: 1, phase: '1단계 (4월 말)', item: 'KOSPI 지수 추이 확인 (주간 이동평균선 돌파 시점 고려)' },
    { id: 2, phase: '1단계 (4월 말)', item: '미국 S&P500 지수 차트 확인 (RSI 과매도 구간 회복 시점)' },
    { id: 3, phase: '1단계 (4월 말)', item: '남북관계 관련 정치적 발언/정책 발표 모니터링' },
    { id: 4, phase: '1단계 (4월 말)', item: '금/구리 가격 추이 및 달러 인덱스 확인' },
    { id: 5, phase: '2단계 (9월)', item: '이재명 정부 100일 정책 효과 분석' },
    { id: 6, phase: '2단계 (9월)', item: '미국 대선 여론조사 추이 확인' },
    { id: 7, phase: '2단계 (9월)', item: '남북경협 관련 구체적 정책 발표 여부 확인' },
    { id: 8, phase: '2단계 (9월)', item: '미중 무역분쟁 상황 모니터링' },
    { id: 9, phase: '3단계 (내년 1월)', item: '트럼프 재선 확정 및 정책 방향성 분석' },
    { id: 10, phase: '3단계 (내년 1월)', item: '미국 금리 정책 전망 확인' },
    { id: 11, phase: '3단계 (내년 1월)', item: '국내 경제지표 점검 (성장률, 물가상승률, 실업률)' },
    { id: 12, phase: '3단계 (내년 1월)', item: '포트폴리오 전체 성과 평가 및 최종 리밸런싱' },
    { id: 13, phase: '모니터링 (2026년)', item: '미국 중간선거 결과에 따른 정책 변화 대응' }
  ];

  // 투자 단계별 체크리스트 필터링
  const filterChecklist = (phase) => {
    return checklistItems.filter(item => item.phase === phase);
  };

  const phase1Items = filterChecklist('1단계 (4월 말)');
  const phase2Items = filterChecklist('2단계 (9월)');
  const phase3Items = filterChecklist('3단계 (내년 1월)');

  // 탭 변경 핸들러
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const getPhaseColor = (phase) => {
    if (phase.includes('1단계')) return '#3498db';
    if (phase.includes('2단계')) return '#e74c3c';
    if (phase.includes('3단계')) return '#2ecc71';
    return '#95a5a6';
  };

  return (
    <div className="p-4">
      <div className="mb-4 border-b">
        <div className="flex">
          <button 
            className={`px-4 py-2 mr-2 ${activeTab === 'timeline' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => handleTabChange('timeline')}
          >
            투자 타임라인
          </button>
          <button 
            className={`px-4 py-2 mr-2 ${activeTab === 'personal' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => handleTabChange('personal')}
          >
            개인연금 포트폴리오
          </button>
          <button 
            className={`px-4 py-2 mr-2 ${activeTab === 'retirement' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => handleTabChange('retirement')}
          >
            퇴직연금 포트폴리오
          </button>
          <button 
            className={`px-4 py-2 ${activeTab === 'checklist' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => handleTabChange('checklist')}
          >
            투자 체크리스트
          </button>
        </div>
      </div>

      {activeTab === 'timeline' && (
        <div>
          <h2 className="text-xl font-bold mb-4">단계별 투자 타임라인 (%, 누적 기준)</h2>
          <div className="mb-6">
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={timelineData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="개인연금누적" stroke="#3498db" strokeWidth={2} />
                <Line type="monotone" dataKey="퇴직연금누적" stroke="#e74c3c" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white border">
              <thead>
                <tr>
                  <th className="border p-2">시점</th>
                  <th className="border p-2">투자 단계</th>
                  <th className="border p-2">주요 이벤트</th>
                  <th className="border p-2">개인연금 투자(%)</th>
                  <th className="border p-2">퇴직연금 투자(%)</th>
                  <th className="border p-2">개인연금 누적(%)</th>
                  <th className="border p-2">퇴직연금 누적(%)</th>
                </tr>
              </thead>
              <tbody>
                {timelineData.map((item, index) => (
                  <tr key={index} className={item.단계.includes('단계') ? 'bg-blue-50' : ''}>
                    <td className="border p-2">{item.name}</td>
                    <td className="border p-2" style={{ backgroundColor: item.단계.includes('단계') ? getPhaseColor(item.단계) + '20' : '' }}>
                      {item.단계}
                    </td>
                    <td className="border p-2">{item.이벤트}</td>
                    <td className="border p-2">{item.개인연금투자}%</td>
                    <td className="border p-2">{item.퇴직연금투자}%</td>
                    <td className="border p-2 font-bold">{item.개인연금누적}%</td>
                    <td className="border p-2 font-bold">{item.퇴직연금누적}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="bg-blue-50 p-4 rounded mb-6">
            <h3 className="font-bold mb-2">투자 실행 방법:</h3>
            <ol className="list-decimal list-inside">
              <li className="mb-1">4월 말: 전체 자금의 1/3 (33%)을 제안된 포트폴리오로 투자</li>
              <li className="mb-1">5월~내년 1월: 나머지 2/3 (67%)를 격주로 분할하여 적립식 투자</li>
              <li className="mb-1">9월 경 중간 리밸런싱 실시 (2단계 포트폴리오 적용)</li>
              <li className="mb-1">내년 1월 최종 리밸런싱 실시 (3단계 포트폴리오 적용)</li>
            </ol>
          </div>
        </div>
      )}

      {activeTab === 'personal' && (
        <div>
          <h2 className="text-xl font-bold mb-4">개인연금 포트폴리오 단계별 자산배분 (단위: %)</h2>
          <div className="mb-6">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={personalPensionData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="TIGER 미국S&P500" stackId="a" fill="#3498db" />
                <Bar dataKey="TIGER 국고채30년" stackId="a" fill="#2ecc71" />
                <Bar dataKey="ACE KRX금현물" stackId="a" fill="#f1c40f" />
                <Bar dataKey="TIGER 구리실물" stackId="a" fill="#e67e22" />
                <Bar dataKey="ACE 국고채3년" stackId="a" fill="#9b59b6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {personalPensionData.map((phase, index) => (
              <div key={index} className="border rounded p-4 bg-gray-50">
                <h3 className="font-bold mb-2">{phase.name}</h3>
                <ul>
                  {Object.entries(phase).filter(([key]) => key !== 'name').map(([key, value]) => (
                    <li key={key} className="flex justify-between mb-1">
                      <span>{key}:</span>
                      <span className="font-bold">{value}%</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="bg-yellow-50 p-4 rounded">
            <h3 className="font-bold mb-2">단계별 주요 변화:</h3>
            <ul className="list-disc list-inside">
              <li className="mb-1">2단계(9월): TIGER 구리실물 비중 10%→15% 확대, ACE 국고채3년 비중 20%→15% 축소</li>
              <li className="mb-1">3단계(내년 1월): TIGER 미국S&P500 비중 30%→35% 확대, ACE 국고채3년 비중 15%→10% 축소</li>
              <li className="mb-1">전체 기간: 기본적인 자산 배분은 유지하되, 이재명 정부 정책 효과와 트럼프 재선에 따라 비중 조정</li>
            </ul>
          </div>
        </div>
      )}

      {activeTab === 'retirement' && (
        <div>
          <h2 className="text-xl font-bold mb-4">퇴직연금 포트폴리오 단계별 자산배분 (단위: %)</h2>
          <div className="mb-6">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={retirementPensionData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="TIGER 미국S&P500" stackId="a" fill="#3498db" />
                <Bar dataKey="TIGER 국고채30년" stackId="a" fill="#2ecc71" />
                <Bar dataKey="ACE KRX금현물" stackId="a" fill="#f1c40f" />
                <Bar dataKey="KODEX 선진국MSCI" stackId="a" fill="#e74c3c" />
                <Bar dataKey="ACE 국고채10년" stackId="a" fill="#1abc9c" />
                <Bar dataKey="TIGER 인도니프티50" stackId="a" fill="#34495e" />
                <Bar dataKey="ACE 국고채3년" stackId="a" fill="#9b59b6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {retirementPensionData.map((phase, index) => (
              <div key={index} className="border rounded p-4 bg-gray-50">
                <h3 className="font-bold mb-2">{phase.name}</h3>
                <ul>
                  {Object.entries(phase).filter(([key]) => key !== 'name').map(([key, value]) => (
                    <li key={key} className="flex justify-between mb-1">
                      <span>{key}:</span>
                      <span className="font-bold">{value}%</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="bg-yellow-50 p-4 rounded">
            <h3 className="font-bold mb-2">단계별 주요 변화:</h3>
            <ul className="list-disc list-inside">
              <li className="mb-1">2단계(9월): ACE KRX금현물 비중 10%→15% 확대, ACE 국고채10년 비중 10%→5% 축소</li>
              <li className="mb-1">3단계(내년 1월): TIGER 미국S&P500 비중 25%→30% 확대, ACE KRX금현물 비중 15%→10% 축소</li>
              <li className="mb-1">전체 기간: 국고채30년, KODEX 선진국MSCI, TIGER 인도니프티50, ACE 국고채3년 비중 유지하며 안정성 확보</li>
            </ul>
          </div>
        </div>
      )}

      {activeTab === 'checklist' && (
        <div>
          <h2 className="text-xl font-bold mb-4">투자 시점 체크리스트</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2" style={{color: '#3498db'}}>1단계 투자 체크리스트 (4월 말)</h3>
            <div className="border rounded p-4 bg-blue-50">
              {phase1Items.map(item => (
                <div key={item.id} className="flex items-start mb-2">
                  <input type="checkbox" className="mt-1 mr-2" id={`item-${item.id}`} />
                  <label htmlFor={`item-${item.id}`}>{item.item}</label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2" style={{color: '#e74c3c'}}>2단계 투자 체크리스트 (9월)</h3>
            <div className="border rounded p-4 bg-red-50">
              {phase2Items.map(item => (
                <div key={item.id} className="flex items-start mb-2">
                  <input type="checkbox" className="mt-1 mr-2" id={`item-${item.id}`} />
                  <label htmlFor={`item-${item.id}`}>{item.item}</label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2" style={{color: '#2ecc71'}}>3단계 투자 체크리스트 (내년 1월)</h3>
            <div className="border rounded p-4 bg-green-50">
              {phase3Items.map(item => (
                <div key={item.id} className="flex items-start mb-2">
                  <input type="checkbox" className="mt-1 mr-2" id={`item-${item.id}`} />
                  <label htmlFor={`item-${item.id}`}>{item.item}</label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-100 p-4 rounded">
            <h3 className="font-bold mb-2">투자 실행 팁:</h3>
            <ul className="list-disc list-inside">
              <li className="mb-1">기술적 지표(RSI, MACD, 이동평균선)와 함께 뉴스 흐름을 종합적으로 판단</li>
              <li className="mb-1">각 단계별 주요 체크 포인트를 모두 확인한 후 투자 실행</li>
              <li className="mb-1">투자 후 포트폴리오 리밸런싱을 통해 목표 비중 유지</li>
              <li className="mb-1">정치·경제 상황 급변 시 체크리스트 재검토 후 투자 시점 조정</li>
              <li className="mb-1">적립식 투자는 가능한 한 규칙적으로 진행하여 평균매수단가 안정화</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvestmentTimeline;