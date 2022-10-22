import { useState } from 'react';
import styled from 'styled-components';
import ImageStrip from '../../components/ImageStrip';
import Layout from '../../components/layout';
import StaffCard from '../../components/StaffCard';
// import { team } from '../../utils/team';
import Modal from '../../components/Modal';
import { Team } from '../../utils/types';

interface ITitans {
  team: Team[];
}

const TeamSection = styled.div`
  padding: 5rem;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 425px) {
    padding: 2rem;
  }
`;

export default function Titans({ team }: ITitans) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);

  const viewTeamMember = member => {
    setSelectedTeamMember(member);
    setModalOpen(true);
  };

  return (
    <Layout page='Our Titans'>
      <section>
        <ImageStrip
          image='francisco-ghisletti-Wf2tCunxqQU-unsplash.jpg'
          text='Meet The Team'
          variant='blue'
        />
        <TeamSection>
          {team.map(t => (
            <StaffCard
              key={t.id}
              member={t}
              setOpen={() => viewTeamMember(t)}
            />
          ))}
        </TeamSection>
      </section>
      <Modal
        open={modalOpen}
        set={setModalOpen}
        selectedMember={selectedTeamMember}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const cmsUrl =
    process.env.NODE_ENV === 'production'
      ? process.env.CMS_URL
      : 'http://localhost:1337';

  const res = await fetch(`${cmsUrl}/api/teams?populate[0]=image`);

  const team = await res.json();

  return {
    props: {
      team: team.data
    }
  };
}
