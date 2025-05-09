import React, { useState, useEffect } from 'react';
import TimerSet from './TimerSet';


const Writing = ({ onSubmit }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start py-10 relative">
    <TimerSet/>
      <div className="bg-[#000949] flex justify-center py-2 px-4 rounded-full mx-auto w-[629px]">
        <div className="flex space-x-8">
          <a className="text-white text-sm ">Reading</a>
          <a className="text-white text-sm underline ">Writing</a>
          <a className="text-white text-sm ">Speaking</a>
          <a className="text-white text-sm ">Listening</a>
          <a className="text-white text-sm ">Final submission</a>
        </div>
      </div>

      {/* Content */}
      <div className="mt-10 text-center">
        {/* Heading */}
        <h1 className="text-[#ADADAD] text-md font-medium underline">Read below paragraph and translate to English</h1>

        {/* Paragraph */}
        <p className="mt-4 max-w-3xl text-[#00475D] text-sm leading-relaxed mx-auto text-left">
        Notre politique d'engagement commercial est conçue pour favoriser des relations transparentes, éthiques et mutuellement bénéfiques avec toutes les parties prenantes, y compris les clients, partenaires, fournisseurs et employés. Nous nous engageons à maintenir les normes les plus élevées de professionnalisme et d'intégrité dans chaque interaction. Cette politique garantit que toutes les activités commerciales sont menées en conformité avec les lois et réglementations applicables, en mettant l'accent sur l'importance de l'équité, du respect et de la responsabilité. Nous encourageons une communication ouverte et une collaboration pour comprendre et répondre efficacement aux besoins de nos parties prenantes. Grâce à cette politique, nous visons à établir et à maintenir des partenariats à long terme qui stimulent l'innovation, la croissance et le succès partagé tout en respectant nos valeurs fondamentales d'excellence et de conduite éthique.
        </p>

        {/* Answer Section */}
        <div className="mt-8 w-full max-w-3xl text-left">
          <label className="inline-block text-left text-white bg-[#00475D] px-4 py-2 rounded-t-lg font-medium mb-0">Answer</label>
          <textarea
            className="w-full h-32 border border-[#CACACA] rounded-b-lg px-4 py-2 text-sm text-gray-600 focus:outline-none "
            placeholder="Type your answer here..."
          ></textarea>
        </div>
        {/* "w-full h-32 border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-600" */}
        {/* Submit Button */}
        <div className="mt-6">
          <button  onClick={onSubmit} className="bg-[#B0181B] hover:bg-[#EEEEEE] text-white hover:text-black text-sm font-medium px-8 py-2 rounded shadow">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Writing;