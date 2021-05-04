import { useState } from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout';
import ImageStrip from '../../components/ImageStrip';
import StaffCard from '../../components/StaffCard';
import { team } from '../../utils/team';
import Modal from '../../components/Modal';

const TeamSection = styled.div`
  padding: 5rem;
  display: flex;

  @media (max-width: 425px) {
    padding: 2rem;
  }
`;

export default function Titans() {
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
