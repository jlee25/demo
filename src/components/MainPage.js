import React, { useState } from 'react';
import User from "./User";
import styled from "styled-components";
import LibraryDetails from './LibraryDetails';
import TaskDuration from './TaskDuration';
import AttachmentList from './AttachmentList';
import ZipFolder from '../assets/images/zipfolder.png'; 
import DownloadIcon from '../assets/images/icon.png';
import Comments from './Comments';

const MainContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 30px;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const DownloadContainer = styled.a`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: #000;
  text-decoration: none;
`;

const ZipIcon = styled.img`
  width: 50px;
  height: 50px;
`;

const Download = styled.img`
  width: 20px;
  height: 20px;
`;

const MainPage = () => {
  const [data] = useState({
    title: "Library Layout Design",
    type: "Interior Design: Floor Plan",
    location: "21 Heart View Rd, ON",
    price: "$90",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    attachments: [
      {id: 1, url: "document.jpg"}, {id: 2, url: "library2.jpg"}, {id: 3, url: "library3.jpg"}, {id: 4, url: "floorplan.jpg"}
    ],
    allattachments: "Photos.zip"
  });

  const [time] = useState({
    duration: "21 days",
    startdate: "March 5",
    enddate: "March 26"
  })

  const detail = "Posted By: ";
  const username = "Frank...";


  return (
    <MainContent>
      <LibraryDetails data={data} />
      <div className="w-30 user-details">
        <User detail={detail} username={username} />
        <TaskDuration time={time} />
      </div>
      <div className="w-70 attachment-container">
        <AttachmentList images={data.attachments} />
      </div>
      <div className="w-30 download-container">
        <DownloadContainer href={data.allattachments} download>
          <ZipIcon className="mr-30" src={ZipFolder} alt="Zip Folder" />
          <div className="mr-30">
            <strong>{data.allattachments}</strong>
          </div>
          <Download className="mr-30" src={DownloadIcon} alt="Download Icon" />
        </DownloadContainer>
      </div>
      <Comments className="mt-20" />
    </MainContent>
  );
}
 
export default MainPage;