import React, { useState, useEffect, useMemo } from 'react';
import { Menu, CircleUserRound, Inbox, Users, Settings, LogOut, FileText, MapPin, Gavel, Landmark, Tag, Hourglass } from 'lucide-react';

// const mockLeads = [
//   {
//     id: 1,
//     name: 'John Doe',
//     phone: '9876543210',
//     connected: false,
//     caseType: 'Criminal',
//     status: 'Pending',
//     location: 'Hyderabad',
//     court: 'District Court',
//   },
//   {
//     id: 2,
//     name: 'Jane Smith',
//     phone: '9123456780',
//     connected: true,
//     caseType: "Family",
//     status: 'Completed',
//     location: 'Delhi',
//     court: 'High Court',
//   },
//   {
//     id: 3,
//     name: 'John Doe',
//     phone: '9999999999',
//     connected: false,
//     caseType: 'Criminal',
//     status: 'Pending',
//     location: 'Hyderabad',
//     court: 'District Court',
//   },
//   {
//     id: 4,
//     name: 'Jane Smith',
//     phone: '9988998899',
//     connected: true,
//     caseType: "Family",
//     status: 'Completed',
//     location: 'Delhi',
//     court: 'High Court',
//   },
//   {
//     id: 5,
//     name: 'John Doe',
//     phone: '1234567890',
//     connected: false,
//     caseType: 'Criminal',
//     status: 'Pending',
//     location: 'Hyderabad',
//     court: 'District Court',
//   },
//   {
//     id: 6,
//     name: 'Jane Smith',
//     phone: '',
//     connected: true,
//     caseType: "Family",
//     status: 'Completed',
//     location: 'Delhi',
//     court: 'High Court',
//   },
//   {
//     id: 7,
//     name: 'John Doe',
//     phone: '9876543210',
//     connected: false,
//     caseType: 'Criminal',
//     status: 'Pending',
//     location: 'Hyderabad',
//     court: 'District Court',
//   },
//   {
//     id: 8,
//     name: 'Jane Smith',
//     phone: '9123456780',
//     connected: true,
//     caseType: "Family",
//     status: 'Completed',
//     location: 'Delhi',
//     court: 'High Court',
//   },
//   {
//     id: 9,
//     name: 'John Doe',
//     phone: '9876543210',
//     connected: false,
//     caseType: 'Criminal',
//     status: 'Pending',
//     location: 'Hyderabad',
//     court: 'District Court',
//   },
//   {
//     id: 10,
//     name: 'Jane Smith',
//     phone: '9123456780',
//     connected: true,
//     caseType: "Family",
//     status: 'Completed',
//     location: 'Delhi',
//     court: 'High Court',
//   },
//   {
//     id: 11,
//     name: 'John Doe',
//     phone: '9876543210',
//     connected: false,
//     caseType: 'Criminal',
//     status: 'Pending',
//     location: 'Hyderabad',
//     court: 'District Court',
//   },
//   {
//     id: 12,
//     name: 'Jane Smith',
//     phone: '9123456780',
//     connected: true,
//     caseType: "Family",
//     status: 'Completed',
//     location: 'Delhi',
//     court: 'High Court',
//   },
//   {
//     id: 13,
//     name: 'John Doe',
//     phone: '9876543210',
//     connected: false,
//     caseType: 'Criminal',
//     status: 'Pending',
//     location: 'Hyderabad',
//     court: 'District Court',
//   },
//   {
//     id: 14,
//     name: 'Jane Smith',
//     phone: '9123456780',
//     connected: true,
//     caseType: "Family",
//     status: 'Completed',
//     location: 'Delhi',
//     court: 'High Court',
//   },
//   {
//     id: 15,
//     name: 'John Doe',
//     phone: '9876543210',
//     connected: false,
//     caseType: 'Criminal',
//     status: 'Pending',
//     location: 'Hyderabad',
//     court: 'District Court',
//   },
//   {
//     id: 16,
//     name: 'Jane Smith',
//     phone: '9123456780',
//     connected: true,
//     caseType: "Family",
//     status: 'Completed',
//     location: 'Delhi',
//     court: 'High Court',
//   },
//   {
//     id: 17,
//     name: 'John Doe',
//     phone: '9876543210',
//     connected: false,
//     caseType: 'Criminal',
//     status: 'Pending',
//     location: 'Hyderabad',
//     court: 'District Court',
//   },
//   {
//     id: 18,
//     name: 'Jane Smith',
//     phone: '9123456780',
//     connected: true,
//     caseType: "Family",
//     status: 'Completed',
//     location: 'Delhi',
//     court: 'High Court',
//   },
//   {
//     id: 19,
//     name: 'John Doe',
//     phone: '9876543210',
//     connected: false,
//     caseType: 'Criminal',
//     status: 'Pending',
//     location: 'Hyderabad',
//     court: 'District Court',
//   },
//   {
//     id: 20,
//     name: 'Jane Smith',
//     phone: '9123456780',
//     connected: true,
//     caseType: "Family",
//     status: 'Completed',
//     location: 'Delhi',
//     court: 'High Court',
//   },
//   {
//     id: 21,
//     name: 'John Doe',
//     phone: '9876543210',
//     connected: false,
//     caseType: 'Criminal',
//     status: 'Pending',
//     location: 'Hyderabad',
//     court: 'District Court',
//   },
//   {
//     id: 22,
//     name: 'Jane Smith',
//     phone: '9123456780',
//     connected: true,
//     caseType: "Family",
//     status: 'Completed',
//     location: 'Delhi',
//     court: 'High Court',
//   },
//   {
//     id: 23,
//     name: 'John Doe',
//     phone: '9876543210',
//     connected: false,
//     caseType: 'Criminal',
//     status: 'Pending',
//     location: 'Hyderabad',
//     court: 'District Court',
//   },
//   {
//     id: 24,
//     name: 'Jane Smith',
//     phone: '9123456780',
//     connected: true,
//     caseType: "Family",
//     status: 'Completed',
//     location: 'Delhi',
//     court: 'High Court',
//   },
//   {
//     id: 25,
//     name: 'John Doe',
//     phone: '9876543210',
//     connected: false,
//     caseType: 'Criminal',
//     status: 'Pending',
//     location: 'Hyderabad',
//     court: 'District Court',
//   },
//   {
//     id: 26,
//     name: 'Jane Smith',
//     phone: '9123456780',
//     connected: true,
//     caseType: "Family",
//     status: 'Completed',
//     location: 'Delhi',
//     court: 'High Court',
//   },
//   {
//     id: 27,
//     name: 'John Doe',
//     phone: '9876543210',
//     connected: false,
//     caseType: 'Criminal',
//     status: 'Pending',
//     location: 'Hyderabad',
//     court: 'District Court',
//   },
//   {
//     id: 28,
//     name: 'Jane Smith',
//     phone: '9123456780',
//     connected: true,
//     caseType: "Family",
//     status: 'Completed',
//     location: 'Delhi',
//     court: 'High Court',
//   },
//   {
//     id: 29,
//     name: 'John Doe',
//     phone: '9876543210',
//     connected: false,
//     caseType: 'Criminal',
//     status: 'Pending',
//     location: 'Hyderabad',
//     court: 'District Court',
//   },
//   {
//     id: 30,
//     name: 'Jane Smith',
//     phone: '9123456780',
//     connected: true,
//     caseType: "Family",
//     status: 'Completed',
//     location: 'Delhi',
//     court: 'High Court',
//   },
//   {
//     id: 31,
//     name: 'John Doe',
//     phone: '9876543210',
//     connected: false,
//     caseType: 'Criminal',
//     status: 'Pending',
//     location: 'Hyderabad',
//     court: 'District Court',
//   },
//   {
//     id: 32,
//     name: 'Jane Smith',
//     phone: '9123456780',
//     connected: true,
//     caseType: "Family",
//     status: 'Completed',
//     location: 'Delhi',
//     court: 'High Court',
//   },

// ];


const mockLeads = [
  {
    id: 1,
    name: 'Aarav Reddy',
    phone: '7894561230',
    connected: false,
    caseType: 'Civil',
    status: 'Pending',
    location: 'Hyderabad',
    court: 'District Court',
  },
  {
    id: 2,
    name: 'Meera Rao',
    phone: '9123045671',
    connected: true,
    caseType: "Family",
    status: 'Completed',
    location: 'Warangal',
    court: 'Family Court',
  },
  {
    id: 3,
    name: 'Rohan Goud',
    phone: '9988776655',
    connected: false,
    caseType: 'Criminal',
    status: 'Pending',
    location: 'Nizamabad',
    court: 'District Court',
  },
  {
    id: 4,
    name: 'Ananya Raju',
    phone: '9012345678',
    connected: true,
    caseType: "Property",
    status: 'Completed',
    location: 'Karimnagar',
    court: 'Civil Court',
  },
  {
    id: 5,
    name: 'Dev Kumar',
    phone: '8123456789',
    connected: false,
    caseType: 'Labor',
    status: 'Pending',
    location: 'Khammam',
    court: 'Labor Court',
  },
  {
    id: 6,
    name: 'Sneha Naik',
    phone: '8999911122',
    connected: true,
    caseType: "Divorce",
    status: 'Completed',
    location: 'Nalgonda',
    court: 'Family Court',
  },
  {
    id: 7,
    name: 'Varun Yadav',
    phone: '7888999000',
    connected: false,
    caseType: 'Criminal',
    status: 'Pending',
    location: 'Mahbubnagar',
    court: 'District Court',
  },
  {
    id: 8,
    name: 'Nisha Jadhav',
    phone: '9090909090',
    connected: true,
    caseType: "Civil",
    status: 'Completed',
    location: 'Adilabad',
    court: 'District Court',
  },
  {
    id: 9,
    name: 'Karan Patil',
    phone: '8899776655',
    connected: false,
    caseType: 'Consumer',
    status: 'Pending',
    location: 'Siddipet',
    court: 'Consumer Court',
  },
  {
    id: 10,
    name: 'Riya Shetty',
    phone: '8223344556',
    connected: true,
    caseType: "Matrimonial",
    status: 'Completed',
    location: 'Karimnagar',
    court: 'Family Court',
  },
  {
    id: 11,
    name: 'Aman Rao',
    phone: '9445566778',
    connected: false,
    caseType: 'Property',
    status: 'Pending',
    location: 'Hyderabad',
    court: 'High Court (Telangana)',
  },
  {
    id: 12,
    name: 'Priya Bheem',
    phone: '8000111222',
    connected: true,
    caseType: "Criminal",
    status: 'Completed',
    location: 'Warangal',
    court: 'Session Court',
  },
  {
    id: 13,
    name: 'Rahul Naidu',
    phone: '9334455667',
    connected: false,
    caseType: 'Cyber Crime',
    status: 'Pending',
    location: 'Hyderabad',
    court: 'Cyber Crime Cell',
  },
  {
    id: 14,
    name: 'Divya Sharma',
    phone: '9988007766',
    connected: true,
    caseType: "Family",
    status: 'Completed',
    location: 'Khammam',
    court: 'Family Court',
  },
  {
    id: 15,
    name: 'Yash Rao',
    phone: '8888999900',
    connected: false,
    caseType: 'Tax',
    status: 'Pending',
    location: 'Nizamabad',
    court: 'Tribunal Court',
  },
  {
    id: 16,
    name: 'Kritika Iyer',
    phone: '8777766655',
    connected: true,
    caseType: "Divorce",
    status: 'Completed',
    location: 'Mahbubnagar',
    court: 'Family Court',
  },
  {
    id: 17,
    name: 'Raj Goud',
    phone: '8111223344',
    connected: false,
    caseType: 'Labor',
    status: 'Pending',
    location: 'Hyderabad',
    court: 'Labor Court',
  },
  {
    id: 18,
    name: 'Pooja Chary',
    phone: '9223344556',
    connected: true,
    caseType: "Child Custody",
    status: 'Completed',
    location: 'Adilabad',
    court: 'Family Court',
  },
  {
    id: 19,
    name: 'Nikhil Raju',
    phone: '9667788990',
    connected: false,
    caseType: 'Corporate',
    status: 'Pending',
    location: 'Hyderabad',
    court: 'Company Court',
  },
  {
    id: 20,
    name: 'Ishita Yadav',
    phone: '9111223344',
    connected: true,
    caseType: "Consumer",
    status: 'Completed',
    location: 'Nalgonda',
    court: 'Consumer Court',
  }
];


function PersonalDashboard() {
  const [leads, setLeads] = useState([]);
  const [locationFilter, setLocationFilter] = useState('');
  const [courtFilter, setCourtFilter] = useState('');
  const [selectedLead, setSelectedLead] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [visiblePhone, setVisiblePhone] = useState(null)
  const [caseType, setCaseType] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [showmodal, setShowModal] = useState(false)
  const [disconnectInfo, setDisconnectInfo] = useState({})
  const [disconnectingPhone, setDisconnectingPhone] = useState(null);
  const [showYesModal, setShowYesModal] = useState(false)
  const [connectInfo, setConnectInfo] = useState({})
  const [currentPage, setCurrentPage] = useState(1);
  const [clickCount, setClickCount] = useState(0)
  const [response,setResponse] = useState(false)
  const itemsPerPage = 15;
  useEffect(() => {
    const stored = localStorage.getItem('leads');
    if (stored) {
      setLeads(JSON.parse(stored));
    } else {
      setLeads(mockLeads);
    }
  }, []);
  // useEffect(() => {
  //   setLeads(mockLeads);
  // }, []);
  useEffect(() => {
    localStorage.setItem('leads', JSON.stringify(leads));
  }, [leads]);
  const locationOptions = useMemo(() => {
    const locations = leads.map(lead => lead.location);
    return Array.from(new Set(locations));
  }, [leads]);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = ''; // Required for Chrome to show the confirmation dialog
    };
  
    if (visiblePhone && !response) {
      // alert("Please respond before navigating away.");
      window.addEventListener('beforeunload', handleBeforeUnload);
    }
  
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [visiblePhone, response]);
  useEffect(() => {
    const handlePopState = (event) => {
      if (visiblePhone && !response) {
        alert("Please respond before navigating away.");
        // Push the same state back so the user stays on this page
        window.history.pushState(null, "", window.location.href);
      }
    };
  
    if (visiblePhone && !response) {
      // Push a new history entry so popstate will trigger on back
      window.history.pushState(null, "", window.location.href);
      window.addEventListener("popstate", handlePopState);
    }
  
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [visiblePhone, response]);

  // useEffect(() => {
  //   console.log('disconnectInfo changed:', disconnectInfo);
  //   localStorage.setItem('reason', disconnectInfo)
  // }, [disconnectInfo]);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     if (disconnectInfo.notes) {
  //       console.log("notes updated:", disconnectInfo.notes);
  //     }
  //   }, 500); // wait 500ms after last change

  //   return () => clearTimeout(timeout);
  // }, [disconnectInfo.notes]);

  // useEffect(() => { // ******* UNDER TESTING *******
  //   const timeout = setTimeout(() => {
  //     console.log('disconnectInfo changed:', disconnectInfo);
  //     // localStorage.setItem('reason', JSON.stringify(disconnectInfo));
  //   }, 500); // delay the effect after user pauses typing

  //   return () => clearTimeout(timeout);
  // }, [disconnectInfo]);

  const courtOptions = useMemo(() => {
    const courts = leads.map(lead => lead.court);
    return Array.from(new Set(courts));
  }, [leads]);

  const caseOptions = useMemo(() => {
    const caseTypes = leads.map(lead => lead.caseType)
    return Array.from(new Set(caseTypes))
  }, [leads])
  const statusOptions = useMemo(() => {
    const statustype = leads.map(lead => lead.status)
    return Array.from(new Set(statustype))
  }, [leads])
  // const handleConnectedChange = (id, value) => {
  //   setLeads(prev =>
  //     prev.map(lead =>
  //       lead.id === id ? { ...lead, connected: value === 'Yes' } : lead
  //     )
  //   );
  // };


  // const handleLeadsChange=(phone,value)=>{ // ******* UNDER TESTING *******
  //   setLeads(prev =>
  //     prev.map(lead =>
  //       lead.phone === phone ? { ...lead, connected: value } : lead
  //     )
  //   );
  //   setVisiblePhone(null)

  // }

  const handleYes = (phone, value) => {
    const decision = 'yes'
    setResponse(true)
    const updatedClicks = {
      ...clickCount[phone],
      [decision]: (clickCount[phone]?.[decision] || 0) + 1
    };
    setClickCount(prev => ({
      ...prev,
      [phone]: updatedClicks
    }));
  
    setConnectInfo({
      phone,
      clicks: updatedClicks
    });
  
    // localStorage.setItem("clickCounts", JSON.stringify({
    //   ...clickCount,
    //   [phone]: updatedClicks
    // }));
    setShowYesModal(value)
    setVisiblePhone(null)
  }
  // const handleConnectedChange = (phone, value) => { // ******* UNDET TESTING *******
  //   if (value === false) {
  //     setShowModal(true)
  //     setDisconnectingPhone(phone)
  //   }
  //   setVisiblePhone(null); // close popup
  // };
  // const handleNo = (phone, value) => {
  //   const decision = 'no'
  //   setShowModal(true)
  //   setDisconnectInfo({ phone })
  //   setClickCount(prev => {
  //     const current = prev[phone] || { yes: 0, no: 0 };
  //     const updated = {
  //       ...prev,
  //       [phone]: {
  //         ...current,
  //         [decision]: current[decision] + 1
  //       }
  //     };
  //     localStorage.setItem("clickCountsold", JSON.stringify(updated));
  //     return updated;
  //   });
  //   setVisiblePhone(null)
  // }
  const handleNo = (phone, value) => {
    const decision = 'no';
    setResponse(true)
  
    const updatedClicks = {
      ...clickCount[phone],
      [decision]: (clickCount[phone]?.[decision] || 0) + 1
    };
  
    setClickCount(prev => ({
      ...prev,
      [phone]: updatedClicks
    }));
  
    setDisconnectInfo({ phone, clicks: updatedClicks });
  
    // localStorage.setItem("clickCounts", JSON.stringify({
    //   ...clickCount,
    //   [phone]: updatedClicks
    // }));
  
    setShowModal(true);
    setVisiblePhone(null);
  };


  const filteredLeads = leads.filter(lead => {
    return (
      (locationFilter ? lead.location === locationFilter : true) &&
      (courtFilter ? lead.court === courtFilter : true) &&
      (caseType ? lead.caseType === caseType : true) &&
      (statusFilter ? lead.status === statusFilter : true)
    );
  });
  const totalPages = Math.ceil(filteredLeads.length / itemsPerPage);
  const paginatedLeads = filteredLeads.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const maskPhone = (phone) => {
    return phone.replace(/^(\d{4})\d{6}$/, '$1******');
  }


  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <div className={`flex flex-col transition-all duration-200 ease-in-out ${sidebarOpen ? 'w-64' : 'w-16'} bg-white border-r min-h-screen shadow-md fixed z-20 `}>
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h2 className={`text-lg font-semibold ${sidebarOpen ? 'block' : 'hidden'}`}>Dashboard</h2>
          <button onClick={() => setSidebarOpen(prev => !prev)} className="p-2 rounded hover:bg-gray-200">
            <Menu size={20} />
          </button>
        </div>
        <nav className="flex-1 px-2 py-4">
          <ul className="space-y-2">
            {/* Sidebar Menu Items */}
            {[
              { icon: <Inbox size={20} />, label: 'All Leads' },
              { icon: <Users size={20} />, label: 'My Clients' },
              { icon: <FileText size={20} />, label: 'Documents' },
            ].map(({ icon, label }, idx) => (
              <li key={idx} className="relative group flex items-center gap-2 p-2 rounded hover:bg-gray-100 cursor-pointer">
                {icon}
                {sidebarOpen && <span>{label}</span>}
                {!sidebarOpen && (
                  <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-gray-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap ">
                    {label}
                  </span>
                )}
              </li>
            ))}

            {/* Location Filter */}
            <li className="relative group flex flex-col gap-1 p-2 rounded hover:bg-gray-100 cursor-pointer">
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                {sidebarOpen && <span className="text-sm font-medium">Region</span>}
                {!sidebarOpen && (
                  <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-gray-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-90">
                    Region
                  </span>
                )}
              </div>
              {sidebarOpen && (
                // <select
                //   className="w-full mt-1 border border-gray-300 px-3 py-2 rounded text-sm bg-white"
                //   value={locationFilter}
                //   onChange={(e) => setLocationFilter(e.target.value)}
                // >
                //   <option value="">All Locations</option>
                //   <option value="Hyderabad">Hyderabad</option>
                //   <option value="Delhi">Delhi</option>
                // </select>
                <select
                  className="w-full mt-1 border border-gray-300 px-3 py-2 rounded text-sm bg-white"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                >
                  <option value="">All Locations</option>
                  {locationOptions.map((loc, idx) => (
                    <option key={idx} value={loc}>{loc}</option>
                  ))}
                </select>
              )}
            </li>

            {/* Court Filter */}
            <li className="relative group flex flex-col gap-1 p-2 rounded hover:bg-gray-100 cursor-pointer">
              <div className="flex items-center gap-2">
                <Landmark size={20} className="text-gray-600" />
                {sidebarOpen && <span className="text-sm font-medium">Jurisdiction</span>}
                {!sidebarOpen && (
                  <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-gray-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Jurisdiction
                  </span>
                )}
              </div>
              {sidebarOpen && (
                <select
                  className="w-full mt-1 border border-gray-300 px-3 py-2 rounded text-sm bg-white"
                  value={courtFilter}
                  onChange={(e) => setCourtFilter(e.target.value)}
                >
                  <option value="">All Courts</option>
                  {courtOptions.map((court, idx) => (
                    <option key={idx} value={court}>{court}</option>
                  ))}
                </select>
              )}
            </li>
            {/* casetypefiler */}
            <li className="relative group flex flex-col gap-1 p-2 rounded hover:bg-gray-100 cursor-pointer">
              <div className="flex items-center gap-2">
                {/* <Gavel size={20} /> */}
                <Tag size={20} className="text-yellow-700" />
                {sidebarOpen && <span className="text-sm font-medium">CaseType</span>}
                {!sidebarOpen && (
                  <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-gray-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    CaseType
                  </span>
                )}
              </div>
              {sidebarOpen && (
                <select
                  className="w-full mt-1 border border-gray-300 px-3 py-2 rounded text-sm bg-white"
                  value={caseType}
                  onChange={(e) => setCaseType(e.target.value)}
                >
                  <option value="">All Cases</option>
                  {caseOptions.map((caseType, idx) => (
                    <option key={idx} value={caseType}>{caseType}</option>
                  ))}
                </select>
              )}
            </li>
            <li className="relative group flex flex-col gap-1 p-2 rounded hover:bg-gray-100 cursor-pointer">
              <div className="flex items-center gap-2">
                {/* <Gavel size={20} /> */}
                {/* <Tag size={20} className="text-gray-600" /> */}
                <Hourglass size={18} className="text-yellow-700" />
                {sidebarOpen && <span className="text-sm font-medium">Status</span>}
                {!sidebarOpen && (
                  <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-gray-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Status
                  </span>
                )}
              </div>
              {sidebarOpen && (
                <select
                  className="w-full mt-1 border border-gray-300 px-3 py-2 rounded text-sm bg-white"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="">Status</option>
                  {statusOptions.map((status, idx) => (
                    <option key={idx} value={status}>{status}</option>
                  ))}
                </select>
              )}
            </li>
          </ul>
        </nav>

      </div>

      {/* Main Content */}
      <div
        className={`p-6 relative transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'
          } w-full`}
      >
        {/* Top Right Menu */}
        <div className="absolute top-4 right-6 z-20">
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            className="w-10 h-10 rounded-full overflow-hidden border border-gray-300 hover:ring-2 hover:ring-blue-400"
          >
            <img
              src="https://ui-avatars.com/api/?name=John+Doe"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-xl rounded-xl border overflow-hidden">
              <div className="p-4 border-b">
                <p className="font-semibold text-gray-800">John Doe</p>
                <p className="text-sm text-gray-500">Advocate</p>
              </div>
              <ul className="py-2 text-sm text-gray-700">
                {/* <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <button className="w-full text-left text-gray-700 hover:text-blue-600">
                    Upgrade Plan
                  </button>
                </li> */}
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <button className="w-full text-left text-gray-700 hover:text-blue-600"
                  // onClick={handleProfile}
                  >
                    Profile
                  </button>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <button className="w-full text-left text-gray-700 hover:text-blue-600">
                    Settings
                  </button>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <button className="w-full text-left text-gray-700 hover:text-red-600">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>

        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Personal Dashboard</h1>

        <div className="rounded-lg  w-full">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-xs uppercase bg-gray-200 text-gray-700 sticky top-0 z-10">
              <tr>
                <th className="p-4 border">Name</th>
                <th className="p-4 border">Phone</th>
                <th className="p-4 border">Connected</th>
                <th className='p-4 border'>CaseType</th>
                <th className="p-4 border">Status</th>
                <th className='p-4 border'>Details</th>
              </tr>
            </thead>
            <tbody>
              {paginatedLeads.map((lead) => (
                <tr key={lead.id} className="bg-white even:bg-gray-50">
                  <td className="p-4 border font-medium text-gray-900">{lead.name}</td>
                  <td className="p-4 border">
                    <button
                      onClick={() => setVisiblePhone(lead.phone)}
                      className="text-blue-600 hover:underline"
                    >
                      {maskPhone(lead.phone)}
                    </button>
                  </td>
                  <td className="p-4 border">
                    <button
                      // onClick={() => handleConnectedChange(lead.id, !lead.connected)}
                      className={`px-3 py-1 rounded font-medium transition ${lead.connected
                        ? 'bg-green-100 text-green-800 hover:bg-green-200'
                        : 'bg-red-100 text-red-800 hover:bg-red-200'
                        }`}
                    >
                      {lead.connected ? 'Yes' : 'No'}
                    </button>
                  </td>
                  <td className='p-4 border'>{lead.caseType}</td>
                  <td className="p-4 border">{lead.status}</td>
                  <td className='p-4 border'>
                    <button onClick={() => setSelectedLead(lead)} className="bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200 transition">
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 flex justify-center  gap-2 text-sm ">
            <button
              onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Prev
            </button>

            <span className="px-3 py-1">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>

        {selectedLead && (
          <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-20">
            <div className="w-[700px] p-6 bg-white rounded-lg shadow-xl relative flex flex-col items-center justify-center">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">Lead Details</h2>
              <p><strong>Name:</strong> {selectedLead.name}</p>
              <p><strong>Phone:</strong> {maskPhone(selectedLead.phone)}</p>
              <p><strong>Connected:</strong> {selectedLead.connected ? 'Yes' : 'No'}</p>
              <p><strong>CaseType:</strong></p>
              <p><strong>Status:</strong> {selectedLead.status}</p>
              <p><strong>Location:</strong> {selectedLead.location}</p>
              <p><strong>Court:</strong> {selectedLead.court}</p>
              <button
                className="mt-4 px-4 py-1 bg-red-100 hover:bg-red-200 rounded"
                onClick={() => setSelectedLead(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      {visiblePhone && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-[300px] text-center">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Phone Number</h3>
            <p className="text-xl text-gray-700">{visiblePhone}</p>
            <div className='flex flex-col'>
              <span>Is Client Connected</span>
              <div className='flex items-center justify-center gap-2'>
                <button
                  onClick={() => handleYes(visiblePhone, true)}
                  className="mt-4 px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded"
                >
                  Yes
                </button>
                <button
                  onClick={() => handleNo(visiblePhone, false)}
                  className="mt-4 px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded"
                >
                  No
                </button>
                {/* <p className="mt-2 text-sm text-gray-500">
                  Yes: {clickCount[visiblePhone]?.yes || 0} | No: {clickCount[visiblePhone]?.no || 0}
                </p> */}
              </div>
            </div>
          </div>
        </div>
      )}


      {/* ADVOCATE NO HANDLING MODAL */}
      {showmodal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white w-[400px] p-6 rounded shadow-xl text-center relative">
            <h3 className="text-lg font-semibold text-red-700 mb-4">Why is the client not connected?</h3>

            <form className="flex flex-col items-start space-y-2">
              {['Wrong Number', 'No Response', 'Not Interested', 'Other'].map((reason, idx) => (
                <label key={idx} className="flex items-center gap-2 text-gray-700">
                  <input
                    type="radio"
                    name="disconnectReason"
                    value={reason}
                    className="accent-red-500"
                    onChange={(e) => {
                      setDisconnectInfo(prev => ({ ...prev, reason }))
                      // console.log('Selected reason:', e.target.value)
                      // console.log('selected', disconnectInfo)

                    }}
                  />
                  {reason}
                  {/* {console.log('selected 2',disconnectInfo)} */}
                </label>
              ))}
              <p>

               No: {clickCount[disconnectInfo.phone]?.no || 0}
              </p>
              {disconnectInfo.reason === 'Other' && (
                <textarea
                  placeholder="Please specify..."
                  className="border px-2 py-1 rounded w-full mt-2 text-sm"
                  value={disconnectInfo.notes}
                  onChange={(e) =>
                    setDisconnectInfo((prev) => ({ ...prev, notes: e.target.value }))
                  }
                />
              )}

            </form>

            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (!disconnectInfo.reason) {
                    alert("Please select a reason before submitting.");
                    return;
                  }
                  setLeads(prev =>
                    prev.map(lead =>
                      lead.phone === disconnectInfo.phone
                        ? {
                          ...lead,
                          connected: false
                        }
                        : lead
                    )
                  );
                  setShowModal(false);
                  console.log('Disconnect Info', disconnectInfo)
                  localStorage.setItem('DisconnectInfo', JSON.stringify(disconnectInfo))

                  // handleLeadsChange(disconnectingPhone, false); // update lead as not connected
                  // setShowModal(false);
                  // setDisconnectingPhone(null); // clear state
                  // localStorage.setItem('reason', JSON.stringify(disconnectInfo));
                  // setDisconnectInfo({ reason: '', notes: '' }); // reset form
                }}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}


      {/* ADVOCATE YES HANDLING MODAL */}
      {showYesModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white w-[400px] p-6 rounded shadow-xl text-center relative">
            <h3 className="text-lg font-semibold text-green-700 mb-4">
              Connection Details
            </h3>

            <form className="flex flex-col items-start space-y-2">
              {['Required Follow-Up', 'Converted to Business', 'Not Interested'].map((status, idx) => (
                <label key={idx} className="flex items-center gap-2 text-gray-700">
                  <input
                    type="radio"
                    name="connectStatus"
                    value={status}
                    className="accent-green-500"
                    onChange={(e) =>
                      setConnectInfo(prev => ({ ...prev, status: e.target.value }))
                    }
                  />
                  {status}
                </label>
              ))}
            <p className="mt-2 text-sm text-gray-500">
            Yes: {clickCount[connectInfo.phone]?.yes || 0}
                </p>
              <textarea
                placeholder="Additional notes (optional)..."
                className="border px-2 py-1 rounded w-full mt-2 text-sm"
                value={connectInfo.notes}
                onChange={(e) =>
                  setConnectInfo(prev => ({ ...prev, notes: e.target.value }))
                }
              />
            </form>

            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={() => setShowYesModal(false)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (!connectInfo.status) {
                    alert("Please select a status");
                    return;
                  }
                  setLeads(prev =>
                    prev.map(lead =>
                      lead.phone === connectInfo.phone
                        ? {
                          ...lead,
                          connected: true
                        }
                        : lead
                    )
                  );
                  setShowYesModal(false);
                  console.log('connect Info', connectInfo)
                  localStorage.setItem('connectInfo', JSON.stringify(connectInfo))
                }}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )
      }

    </div>
  );
}

export default PersonalDashboard;
