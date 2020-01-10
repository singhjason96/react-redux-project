import React from 'react';
import { shallow } from 'enzyme';
import "../../setupTests";
import { CollectionItem } from './collection-item.component';

describe('CollectionItem component', () => {
  let wrapper;
  let mockAddItem;
  const imageUrl = 'www.testImage.com';
  const mockName = 'fresh prince tee';
  const mockPrice = 30;

  beforeEach(() => {
    mockAddItem = jest.fn();

    const mockProps = {
      item: {
        imageUrl: imageUrl,
        price: mockPrice,
        name: mockName
      },
      addItem: mockAddItem
    };

    wrapper = shallow(<CollectionItem {...mockProps} />);
  });

  it('should render CollectionItem component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call addItem when AddButton clicked', () => {
    wrapper.find('AddButton').simulate('click');

    expect(mockAddItem).toHaveBeenCalled();
  });

  it('should render imageUrl as a prop on BackgroundImage', () => {
    expect(wrapper.find('BackgroundImage').prop('imageUrl')).toBe(imageUrl);
  });

  it('should render name prop in NameContainer', () => {
    expect(wrapper.find('NameContainer').text()).toBe(mockName);
  });

  it('should render price prop in PriceContainer', () => {
    const price = parseInt(wrapper.find('PriceContainer').text());
    expect(price).toBe(mockPrice);
  });
});