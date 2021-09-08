import {StyledCenterSectionHeaderNavLink, StyledMusicSectionHeader, StyledCenterSectionNumSpan} from "../../../../layout/layout";

const MusicSectionHeader = () =>  <StyledMusicSectionHeader>
   <StyledCenterSectionHeaderNavLink to='/profile'>
      Музыка
      <StyledCenterSectionNumSpan>
         24
      </StyledCenterSectionNumSpan>
   </StyledCenterSectionHeaderNavLink>
</StyledMusicSectionHeader>
export default MusicSectionHeader