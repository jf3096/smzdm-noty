describe('env', () => {
  it('should get all env', async () => {
    expect(() => {
      const envConfig = require('../src').envConfig;
      expect(envConfig.mongoConnectionString).not.toBeUndefined();
      expect(envConfig.mongoConnectionString).not.toBeNull();
      expect(envConfig.mongoConnectionString).not.toBe('');

      expect(envConfig.wxPusherAppToken).not.toBeUndefined();
      expect(envConfig.wxPusherAppToken).not.toBeNull();
      expect(envConfig.wxPusherAppToken).not.toBe('');
    }).not.toThrow();
  });
});
