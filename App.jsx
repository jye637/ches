import React, { useState } from 'react';
import { 
  BookOpen, 
  Cpu, 
  GraduationCap, 
  Users, 
  BarChart, 
  BrainCircuit, 
  School, 
  Award, 
  ChevronDown, 
  ChevronUp,
  Link as LinkIcon,
  MonitorPlay,
  Lightbulb,
  Globe,
  Glasses, // For VR
  Plane
} from 'lucide-react';

// Card Component for consistency
const Card = ({ title, icon: Icon, children, className = "" }) => (
  <div className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-600 ${className}`}>
    <div className="flex items-center mb-4">
      <div className="p-2 bg-blue-50 rounded-lg mr-3">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
    <div className="text-gray-600 leading-relaxed">
      {children}
    </div>
  </div>
);

// Section Component
const Section = ({ title, subtitle, id, className = "", children }) => (
  <section id={id} className={`py-16 px-4 md:px-8 ${className}`}>
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{title}</h2>
        {subtitle && <p className="text-blue-600 text-lg font-medium">{subtitle}</p>}
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
      </div>
      {children}
    </div>
  </section>
);

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white pt-24 pb-48 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/3 -translate-y-1/4">
          <Cpu size={400} />
        </div>
        <div className="max-w-5xl mx-auto relative z-10 text-center md:text-left">
          <div className="inline-block bg-blue-500/20 backdrop-blur-sm px-4 py-1 rounded-full text-blue-200 font-medium mb-4 border border-blue-400/30">
            崇學國小實習校友經驗分享
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            跨域轉身，<br className="md:hidden"/>從<span className="text-blue-400">理工</span>看見<span className="text-yellow-400">教育</span>新視野
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
            結合「測驗統計專業」與「5G智慧學習實務」，分享一位非典型老師的上榜之路與未來教育想像。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#strategy" className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-bold shadow-lg transition-all text-center">
              教甄實戰攻略
            </a>
            <a href="#smart-learning" className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-lg font-bold transition-all text-center">
              探索智慧學習
            </a>
          </div>
        </div>
      </header>

      {/* Profile Summary Area */}
      <div className="max-w-6xl mx-auto px-4 -mt-32 relative z-20 mb-16 space-y-6">
        
        {/* Main Profile Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="col-span-1 md:col-span-1 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-gray-100 pb-8 md:pb-0 md:pr-8">
            <div className="w-40 h-40 bg-gray-200 rounded-full mb-4 overflow-hidden border-4 border-blue-100 shadow-md">
               <img 
                 src="https://class.kh.edu.tw/sites/28380/album_file/1/IMG_20251121_083417.JPG_compressed_.JPEG" 
                 alt="楊煜傑老師" 
                 className="w-full h-full object-cover"
                 onError={(e) => {
                   e.target.onerror = null;
                   e.target.parentNode.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-blue-600 text-white text-4xl font-bold">楊</div>';
                 }}
               />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">楊煜傑 老師</h2>
            <p className="text-blue-600 font-medium mb-2">蔡文國小 / 5G智慧學習推手</p>
            <div className="flex gap-2 mt-2 justify-center flex-wrap">
              <span className="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded">工教碩士</span>
              <span className="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded">測統碩士</span>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h3 className="text-lg font-bold text-gray-800 flex items-center">
              <GraduationCap className="w-5 h-5 mr-2 text-blue-500" />
              教育足跡：從偏鄉到市區，從高中到國小
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
               {[
                 "蘭嶼高中", "大榮高中", "仁德國中", 
                 "岡山國中", "崇學國小(實習)", "南安國小", "蔡文國小(現任)"
               ].map((school, i) => (
                 <div key={i} className={`p-2 rounded border ${school.includes("現任") ? "bg-blue-50 border-blue-200 text-blue-700 font-bold" : "bg-gray-50 border-gray-200 text-gray-600"}`}>
                   {school}
                 </div>
               ))}
            </div>
            <div className="pt-4 border-t border-gray-100">
               <p className="text-gray-600 text-sm leading-relaxed">
                 <span className="font-bold text-gray-800">核心專長：</span> 
                 電機工程背景、機器人教育(EV3)、教育測驗與統計、5G智慧學習、PBL課程設計、VR虛擬實境教學。
               </p>
            </div>
          </div>
        </div>

        {/* International Experience Banner */}
        <div className="bg-gradient-to-r from-blue-800 to-indigo-900 rounded-xl shadow-lg p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute opacity-10 -left-10 top-0">
            <Globe size={200} />
          </div>
          <div className="relative z-10 flex-1">
            <div className="flex items-center space-x-2 text-blue-300 font-bold mb-2 uppercase tracking-wider text-sm">
              <Plane size={16} />
              <span>International Professional Development</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">2024 教育部國中小雙語教師海外進修</h3>
            <p className="text-blue-100 text-lg">
              <span className="font-semibold text-white">澳洲阿得雷德大學 (University of Adelaide)</span>
              <span className="hidden md:inline mx-2">|</span>
              <span className="block md:inline text-sm md:text-lg mt-1 md:mt-0 opacity-90">深化雙語教學策略與跨文化教育視野</span>
            </p>
          </div>
          <div className="relative z-10 flex-shrink-0">
             <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center text-blue-900 font-bold shadow-lg">
               <Award size={32} />
             </div>
          </div>
        </div>

      </div>

      {/* Section 1: Exam Strategy */}
      <Section id="strategy" title="教甄實戰攻略" subtitle="差異化競爭：找到你的不可取代性">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="筆試：理科邏輯解題" icon={BarChart}>
            <p className="mb-4">
              善用<span className="font-bold text-blue-600">測驗與統計研究所</span>背景，將教育理論數據化、邏輯化。
            </p>
            <ul className="list-disc list-outside pl-5 space-y-2 text-sm">
              <li>不只是背誦，而是建構邏輯框架。</li>
              <li>分析試題鑑別度，針對「大魔王」題型（統計/測驗）進行突破，這是與一般考生拉開分數的關鍵。</li>
            </ul>
          </Card>
          
          <Card title="試教：STEM與跨域整合" icon={Cpu}>
            <p className="mb-4">
              將<span className="font-bold text-blue-600">電機工程與機器人</span>專長融入國小教學，打造藍海優勢。
            </p>
            <ul className="list-disc list-outside pl-5 space-y-2 text-sm">
              <li>在數學課引入運算思維 (Computational Thinking)。</li>
              <li>展現 PBL (專題式學習) 課程設計能力，例如機器人或科學實作。</li>
              <li>雙語教學：結合理工背景與<span className="font-bold text-blue-600">澳洲進修經驗</span>進行 CLIL 教學。</li>
            </ul>
          </Card>

          <Card title="口試：導師經營實戰" icon={Users}>
            <p className="mb-4">
              運用<span className="font-bold text-blue-600">豐富的導師經歷</span>，證明具備處理高年級問題的能力。
            </p>
            <ul className="list-disc list-outside pl-5 space-y-2 text-sm">
              <li>展示「班級網頁」作為親師溝通證據（預防勝於治療）。</li>
              <li>強調「銜接教育」視角，讓評審相信你能搞定高年級秩序與家長。</li>
              <li>展現資訊行政能力（Google Admin/網頁維護）。</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Section 2: Evidence - The Class Website */}
      <div className="bg-white py-16 px-4 border-y border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="bg-gray-100 rounded-xl p-2 shadow-inner border border-gray-300">
               {/* Visual representation of a browser window */}
               <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                 <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <div className="ml-4 bg-white px-3 py-1 rounded text-xs text-gray-500 flex-1">class.kh.edu.tw/28380</div>
                 </div>
                 <div className="p-6 bg-slate-50 min-h-[250px] flex items-center justify-center flex-col text-center relative group">
                    <img 
                      src="https://class.kh.edu.tw/sites/28380/banner/1/DSC_0411.JPG" 
                      alt="蔡文國小班級網頁" 
                      className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <div className="relative z-10">
                      <Users size={48} className="text-blue-600 mb-2 mx-auto"/>
                      <h4 className="font-bold text-gray-800 text-xl">蔡文國小 班級網頁</h4>
                      <p className="text-sm text-gray-600 mt-2 font-medium">導師經營 | 親師溝通 | 榮譽制度</p>
                    </div>
                 </div>
               </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-bold mb-4">
              必殺技：歷程檔案證據力
            </div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">為什麼要秀出這個網站？</h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              <span className="font-bold text-blue-600">這是蔡文國小的班級網頁，也是我導師經歷的精華。</span><br/>
              當口試委員問：「你如何做好親師溝通？」<br/>
              我的答案不是空談，而是拿出這個實際運作的網頁。它完整記錄了班級活動、榮譽榜與親師公告，證明我具備將班級經營「透明化」、「系統化」的能力，這是讓家長放心、行政安心的最佳證據。
            </p>
            <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
              <p className="text-blue-800 font-medium">
                💡 給學弟妹的建議：建立你的數位名片，讓你的教學檔案「看得到」且「有厚度」。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Smart Learning at Caiwen */}
      <Section id="smart-learning" title="未來教育現場" subtitle="蔡文國小：5G智慧學習 & VR新科技示範學校">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <p className="text-gray-600 text-lg">
            我目前任教的蔡文國小，不僅是<span className="font-bold text-blue-600">教育部 5G 智慧學習示範學校</span>，
            更肩負<span className="font-bold text-purple-600">5G 新科技 VR 示範學校計畫</span>。
            這代表未來的教育現場，將是虛實整合的沈浸式學習。
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { 
              icon: MonitorPlay, 
              title: "智慧課堂", 
              desc: "導入 HiTeach 互動系統與因材網，結合大螢幕與平板，達成「教學即時化」。" 
            },
             { 
              icon: Glasses, 
              title: "VR 虛擬實境", 
              desc: "運用 5G 高速傳輸與 VR 頭盔，帶領學生進行沈浸式探索，突破教室圍牆。" 
            },
            { 
              icon: BrainCircuit, 
              title: "AI 輔助", 
              desc: "運用 e度AI學伴 與 Custom GPTs，實現差異化教學與行政減負。" 
            },
            { 
              icon: Users, 
              title: "四學歷程", 
              desc: "自學、共學、互學、導學。學生不再是被動聆聽，而是主動探究。" 
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-300 transition-colors">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${item.title.includes("VR") ? "bg-purple-100 text-purple-600" : "bg-blue-100 text-blue-600"}`}>
                <item.icon size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Deep Dive Block */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-12 opacity-5">
             <BrainCircuit size={300} />
           </div>
           
           <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
             <div>
               <h3 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                 科技賦能：從數據驅動到虛擬實境
               </h3>
               <p className="text-gray-300 mb-6 leading-relaxed">
                 我有測驗統計的背景，所以我看重數據；我有理工背景，所以我擁抱新科技。
                 在蔡文，我們用 HiTeach 分析作答熱點，用 VR 讓孩子看見世界。
                 這正是「雙語數位」教師的未來樣貌。
               </p>
               <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                 <h4 className="font-bold text-blue-300 mb-2 flex items-center">
                   <Lightbulb size={18} className="mr-2" />
                   教甄應用心法
                 </h4>
                 <p className="text-sm text-gray-200">
                   在口試時，不要只說你會用平板。要說你會用<span className="text-yellow-300 font-bold">VR開啟視野</span>，用<span className="text-yellow-300 font-bold">數據精準教學</span>，展現你對未來教育的想像力。
                 </p>
               </div>
             </div>
             <div className="space-y-4">
                {/* Mockup of Tech Stack */}
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                   <div className="flex justify-between items-center mb-2">
                     <span className="text-sm font-bold text-gray-400">蔡文國小 智慧教學堆疊</span>
                   </div>
                   <div className="space-y-2">
                     <div className="flex items-center p-2 bg-purple-600/20 rounded border border-purple-500/30">
                       <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                       <span className="text-sm">5G 新科技 VR 虛擬實境 (體驗層)</span>
                     </div>
                     <div className="flex items-center p-2 bg-blue-600/20 rounded border border-blue-500/30">
                       <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                       <span className="text-sm">HiTeach / 因材網 (數據層)</span>
                     </div>
                     <div className="flex items-center p-2 bg-teal-600/20 rounded border border-teal-500/30">
                       <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                       <span className="text-sm">AI 學伴 / Custom GPTs (輔助層)</span>
                     </div>
                   </div>
                </div>
                <div className="text-center">
                   <p className="text-xs text-gray-400">教育部 5G 智慧學習 & VR 示範計畫</p>
                </div>
             </div>
           </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl overflow-hidden border-2 border-gray-600">
            <img 
              src="https://class.kh.edu.tw/sites/28380/album_file/1/IMG_20251121_083417.JPG_compressed_.JPEG" 
              alt="楊" 
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">期待在教育現場與各位相遇</h2>
          <p className="mb-8 max-w-xl mx-auto">
            教甄是一場馬拉松，保持彈性，找出你的「斜槓優勢」。
            無論分發到哪裡，都能將過去的經歷轉化為養分。
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="http://120.116.71.1/yu-chieh/ycintro.html" target="_blank" rel="noreferrer" className="flex items-center hover:text-white transition-colors">
              <LinkIcon size={16} className="mr-2" /> 個人簡歷網站
            </a>
            <a href="https://class.kh.edu.tw/28380" target="_blank" rel="noreferrer" className="flex items-center hover:text-white transition-colors">
              <LinkIcon size={16} className="mr-2" /> 蔡文國小班級網頁
            </a>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-xs text-gray-500">
            © 2026 Yang Yu-Chieh. Created for Chongxue Elementary School Sharing Session.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
