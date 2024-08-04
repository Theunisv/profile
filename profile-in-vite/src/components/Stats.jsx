import React from 'react';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient("https://xseibevdmgyznivmadmn.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzZWliZXZkbWd5em5pdm1hZG1uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI1OTIwMjYsImV4cCI6MjAzODE2ODAyNn0.ifmLApWJlnjinvN10mjaPlm1s1t6Zmsy5NwnGZ8242A");

function Stats() {
  const [techStats, setTechStats] = useState([]);

  useEffect(() => {
    getTechStats();
  }, []);

  async function getTechStats() {
    const { data } = await supabase.from("techstats").select();
    setTechStats(data);
  }

  return (
    <div className='px-[10%]'>
      <h1 className='text-md mb-5 text-center italic font-bold'>Technology Stats (A demo of pulling in data from a trusty old PostgreSQL DB)</h1>
      <table className='table table-zebra table-fixed'>
        <thead className='bg-primary'>
          <tr className='bg-primary text-dark '>
            <th className='sm:text-sm md:text-2xl rounded-tl-lg text-center'>Framework</th>
            <th className='sm:text-sm md:text-2xl text-center'>Websites</th>
            <th className='sm:text-sm md:text-2xl rounded-tr-lg text-center text-wrap'>Market Share</th>
          </tr>
        </thead>
        <tbody>
          {techStats.map((techStat) => {
            const marketshareInt = parseInt(techStat.marketshare, 10);
            const formattedNumber = Intl.NumberFormat("en-US").format(techStat.websitecount); 
            const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
            let hexColor = "#";
            for (let i = 0; i < 6; i++) {
              hexColor += hex[Math.floor(Math.random() * hex.length)];
            }

            return (
              <tr key={techStat.id}>
                <td className='sm:text-xs md:text-lg text-center'>{techStat.technology}</td>
                <td className='sm:text-xs md:text-lg text-center'>{formattedNumber}</td>
                <td className='flex flex-col px-2'>
                <div className="progress-info">
                      <div className="progress-percentage w-full flex justify-center">
                        <span className="text-sm font-weight-normal text-center w-full">{techStat.marketshare}%</span>
                      </div>
                    </div>
                <div className="relative pt-1 mx-5">
                    <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-emerald-200">
                      <div style={{width: `${marketshareInt}%`}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"></div>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
        </table>
    </div>
  )
}

export default Stats;