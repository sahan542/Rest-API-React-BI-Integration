//import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import { PowerBIEmbed } from 'powerbi-client-react';

const PowerBIDashboard = () => {
  /*
  const [accessToken, setAccessToken] = useState(null);
  const reportId = "288af926-2c3b-4702-bbf4-6333f213c921";  
  const embedUrl = "https://app.powerbi.com/reportEmbed?reportId=288af926-2c3b-4702-bbf4-6333f213c921&groupId=8de4c42d-4d1e-4823-a3ed-2c29f99fdbe4&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d";

  // Function to fetch a new access token from your Spring Boot backend
  const getAccessToken = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/generateToken');
      const token = JSON.parse(response.data).access_token;  // Extract the token
      setAccessToken(token);
    } catch (error) {
      console.error("Error fetching token:", error);
    }
  };

  // Fetch the token on component mount and set an interval to refresh every 55 minutes
  useEffect(() => {
    getAccessToken();

    // Set interval to refresh token every 55 minutes (3300 seconds)
    const interval = setInterval(() => {
      getAccessToken();
    }, 55 * 60 * 1000);  // 55 minutes in milliseconds

    return () => clearInterval(interval);  // Cleanup interval on component unmount
  }, []);

  if (!accessToken) {
    return <div>Loading Power BI Dashboard...</div>;
  }
  */

  return (
    <div>
      <PowerBIEmbed
        embedConfig={{
          type: 'report',  // Or 'dashboard', 'tile', etc.
          id: "288af926-2c3b-4702-bbf4-6333f213c921",
          embedUrl: "https://app.powerbi.com/reportEmbed?reportId=288af926-2c3b-4702-bbf4-6333f213c921&groupId=8de4c42d-4d1e-4823-a3ed-2c29f99fdbe4&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
          accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1jN2wzSXo5M2c3dXdnTmVFbW13X1dZR1BrbyIsImtpZCI6Ik1jN2wzSXo5M2c3dXdnTmVFbW13X1dZR1BrbyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYWEyMzJkYjItN2E3OC00NDE0LWE1MjktMzNkYjkxMjRjYmE3LyIsImlhdCI6MTcyNzU0MDM3OCwibmJmIjoxNzI3NTQwMzc4LCJleHAiOjE3Mjc1NDQ4ODUsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84WUFBQUFqWEJqeW9wSkhrZ2pKenM3OXA0QWh4Ums3clpGT2cvT2JoeG9YZytzYWtHOVNaL25MNUZBQlZPM2tacDJPd0h5IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiU0UvMjAxOS8wMzYiLCJnaXZlbl9uYW1lIjoiU0lMVkEgRC5ELlMuUi4iLCJpZHR5cCI6InVzZXIiLCJpcGFkZHIiOiIyNDAyOjQwMDA6YjI4MToxY2FkOjg1YmI6YzE4MjpjYmM1OmVhODQiLCJuYW1lIjoiU0UvMjAxOS8wMzYgLSBTSUxWQSBELkQuUy5SLiIsIm9pZCI6IjBjZjQ0ZDYyLTNjNzgtNDUzNy1iZGVkLWZkMTc0N2I5NTQ1YSIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS0xNDM2NjgxMjU5LTI0NDE0MzI4NzMtMjUxNTQ3ODUwNS05ODQxMSIsInB1aWQiOiIxMDAzMjAwMTRDMjBDMzdGIiwicmgiOiIwLkFWVUFzaTBqcW5oNkZFU2xLVFBia1NUTHB3a0FBQUFBQUFBQXdBQUFBQUFBQUFDX0FLdy4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJ5a09XMXhmejNKdkpITUx6aTNKczBfMFJGU1RlVkRkZk5vQ29PUmFPMjAwIiwidGlkIjoiYWEyMzJkYjItN2E3OC00NDE0LWE1MjktMzNkYjkxMjRjYmE3IiwidW5pcXVlX25hbWUiOiJzaWx2YWRkLXNlMTkwMzZAc3R1Lmtsbi5hYy5sayIsInVwbiI6InNpbHZhZGQtc2UxOTAzNkBzdHUua2xuLmFjLmxrIiwidXRpIjoicnlLNERuaGZsVXljemlGNWRnbDBBUSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19pZHJlbCI6IjEgMjAifQ.YWufguP4EavG1aQVxcB3WnXRgnz1TTl_diCw7YqThhFCGI-gp-4ivIkyeyGkBb-sZY9NwDzJbYBdoVxmC-LOe2Sj99Nu_V3YHH83-NPAkT3Mi5fK1oNSjfzGOLZuDMAhiagd1GPR9O_DhrYRuuiowkK7UJTxY5eQkcCGJ0ukdxi71n_Cl-USIyYsUs4-PtNA_Nn_8kjgDLFtw-WJ8ePBitEsLWgsBSP9CcUKi9DzKxnu5AmbBnVkfdXfgRIT9o4qhscY0bqUhocD0ss7vwoFWCnVjHAzLJJ1ZRpUQAs-BLXVbTQtFVKkp5lNyhOn5e6J7pM9Rf493K8ilGHm_dOs_Q",
          settings: {
            filterPaneEnabled: false,
            navContentPaneEnabled: false,
          },
        }}
        cssClassName="Embed-container"
        getEmbeddedComponent={(embeddedReport) => {
          // Use this function to interact with the embedded report if needed
          console.log('Report embedded: ', embeddedReport);
        }}
      />
    </div>
  );
};

export default PowerBIDashboard;
