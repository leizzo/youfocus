import { SwitchBase } from '@youfocus/ui';
import { getMessage } from '@youfocus/utils';
import PropTypes from 'prop-types';

export function SwitchGroup({ data, onChanged }) {
  return (
    <>
      {Object.entries(data)
        .reduce((a, c) => {
          a.push({ [c[0]]: c[1], key: c[0] });
          return a;
        }, [])
        .map((item) => (
          <div
            key={item.key}
            className="w-full mb-3"
          >
            <SwitchBase
              text={getMessage(item.key)}
              checked={item[item.key]}
              onChange={
                () => onChanged(
                  {
                    [item.key]: !data[item.key],
                  },
                )
              }
            />
          </div>
        ))}
    </>
  );
}

SwitchGroup.propTypes = {
  data: PropTypes.shape({}),
  onChanged: PropTypes.func,
};

SwitchGroup.defaultProps = {
  data: {},
  onChanged: () => [],
};

export default SwitchGroup;
