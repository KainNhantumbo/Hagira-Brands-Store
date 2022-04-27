import { OverviewContainer } from '../../styles/admin/overview';
import { BiHelpCircle, BiAlarm} from 'react-icons/bi';

const Overview = () => {
  
	return <OverviewContainer>
    	<section className='infograph'>
				<div>
					<BiHelpCircle />
					<h3>Tem alguma questão?</h3>
					<p>
						
					</p>
				</div>
				<div>
					<BiAlarm />
					<h3>Horários de serviço</h3>
					<p></p>
				</div>
			</section>
  </OverviewContainer>;
};

export default Overview;
